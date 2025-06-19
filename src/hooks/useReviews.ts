
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

interface Review {
  id: string;
  user_id: string;
  product_id: string;
  rating: number;
  title: string | null;
  comment: string | null;
  is_verified_purchase: boolean;
  helpful_count: number;
  created_at: string;
  updated_at: string;
  profiles: {
    full_name: string | null;
  };
}

export const useReviews = (productId?: string) => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      fetchReviews(productId);
    }
  }, [productId]);

  const fetchReviews = async (productId: string) => {
    try {
      const { data, error } = await supabase
        .from('product_reviews')
        .select(`
          *,
          profiles (
            full_name
          )
        `)
        .eq('product_id', productId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
      } else {
        setReviews(data || []);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const addReview = async (productId: string, rating: number, title?: string, comment?: string) => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to write a review",
        variant: "destructive",
      });
      return false;
    }

    try {
      const { error } = await supabase
        .from('product_reviews')
        .insert({
          user_id: user.id,
          product_id: productId,
          rating,
          title,
          comment,
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Review already exists",
            description: "You have already reviewed this product",
            variant: "destructive",
          });
        } else {
          console.error('Error adding review:', error);
          toast({
            title: "Error",
            description: "Failed to add review",
            variant: "destructive",
          });
        }
        return false;
      } else {
        toast({
          title: "Review added",
          description: "Your review has been added successfully",
        });
        await fetchReviews(productId);
        return true;
      }
    } catch (error) {
      console.error('Error adding review:', error);
      return false;
    }
  };

  const updateReview = async (reviewId: string, productId: string, rating: number, title?: string, comment?: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('product_reviews')
        .update({
          rating,
          title,
          comment,
        })
        .eq('id', reviewId)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error updating review:', error);
        toast({
          title: "Error",
          description: "Failed to update review",
          variant: "destructive",
        });
        return false;
      } else {
        toast({
          title: "Review updated",
          description: "Your review has been updated successfully",
        });
        await fetchReviews(productId);
        return true;
      }
    } catch (error) {
      console.error('Error updating review:', error);
      return false;
    }
  };

  const deleteReview = async (reviewId: string, productId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('product_reviews')
        .delete()
        .eq('id', reviewId)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error deleting review:', error);
        toast({
          title: "Error",
          description: "Failed to delete review",
          variant: "destructive",
        });
        return false;
      } else {
        toast({
          title: "Review deleted",
          description: "Your review has been deleted",
        });
        await fetchReviews(productId);
        return true;
      }
    } catch (error) {
      console.error('Error deleting review:', error);
      return false;
    }
  };

  const getUserReview = (productId: string) => {
    if (!user) return null;
    return reviews.find(review => review.user_id === user.id && review.product_id === productId);
  };

  const getAverageRating = () => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return total / reviews.length;
  };

  return {
    reviews,
    loading,
    addReview,
    updateReview,
    deleteReview,
    getUserReview,
    getAverageRating,
    refetch: productId ? () => fetchReviews(productId) : () => {},
  };
};

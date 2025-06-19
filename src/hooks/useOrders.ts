
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

interface OrderItem {
  id: string;
  product_id: string;
  product_name: string;
  product_image: string | null;
  quantity: number;
  unit_price: number;
  total_price: number;
}

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_amount: number;
  shipping_amount: number;
  tax_amount: number;
  discount_amount: number;
  billing_address: any;
  shipping_address: any;
  payment_status: string;
  payment_method: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
  order_items: OrderItem[];
}

export const useOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders();
    } else {
      setOrders([]);
      setLoading(false);
    }
  }, [user]);

  const fetchOrders = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching orders:', error);
        toast({
          title: "Error",
          description: "Failed to fetch orders",
          variant: "destructive",
        });
      } else {
        setOrders(data || []);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (orderData: {
    items: any[];
    billing_address: any;
    shipping_address: any;
    payment_method?: string;
    notes?: string;
  }) => {
    if (!user) return null;

    try {
      // Calculate totals
      const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const shipping_amount = subtotal > 500 ? 0 : 50; // Free shipping over ₹500
      const tax_amount = subtotal * 0.18; // 18% GST
      const total_amount = subtotal + shipping_amount + tax_amount;

      // Generate order number
      const { data: orderNumberData, error: orderNumberError } = await supabase
        .rpc('generate_order_number');

      if (orderNumberError) {
        console.error('Error generating order number:', orderNumberError);
        return null;
      }

      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          order_number: orderNumberData,
          total_amount,
          shipping_amount,
          tax_amount,
          billing_address: orderData.billing_address,
          shipping_address: orderData.shipping_address,
          payment_method: orderData.payment_method,
          notes: orderData.notes,
        })
        .select()
        .single();

      if (orderError) {
        console.error('Error creating order:', orderError);
        toast({
          title: "Error",
          description: "Failed to create order",
          variant: "destructive",
        });
        return null;
      }

      // Create order items
      const orderItems = orderData.items.map(item => ({
        order_id: order.id,
        product_id: item.id,
        product_name: item.name,
        product_image: item.image,
        quantity: item.quantity,
        unit_price: item.price,
        total_price: item.price * item.quantity,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) {
        console.error('Error creating order items:', itemsError);
        toast({
          title: "Error",
          description: "Failed to create order items",
          variant: "destructive",
        });
        return null;
      }

      toast({
        title: "Order created successfully",
        description: `Order ${order.order_number} has been placed`,
      });

      await fetchOrders(); // Refresh orders
      return order;
    } catch (error) {
      console.error('Error creating order:', error);
      return null;
    }
  };

  return {
    orders,
    loading,
    createOrder,
    refetch: fetchOrders,
  };
};

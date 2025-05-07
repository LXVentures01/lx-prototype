
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Menu, ShoppingCart } from "lucide-react";

export default function LXProductPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const subtotal = 89 * quantity;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-neutral-800">
        <h1 className="text-2xl font-bold">LX</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Lookbook</a>
          <a href="#" className="text-gray-300 hover:text-white">Shop</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <ShoppingCart className="cursor-pointer text-white h-6 w-6" onClick={() => setCartOpen(true)} />
          <Menu className="md:hidden text-white h-6 w-6" />
        </div>
      </header>

      {/* Product Section */}
      <div className="px-6 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1619983081563-430f3c0d622f"
            alt="Layered Luxe Necklace"
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Layered Luxe Necklace Set</h1>
            <p className="text-gray-400">
              A set of three distinct gold necklaces, perfect for effortless layering. Designed for statement-making elegance with minimal effort.
            </p>
            <p className="text-xl font-semibold text-white">$89.00</p>

            <Button className="bg-white text-black px-6 py-3 rounded-2xl hover:scale-105 transition-transform">
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="bg-neutral-900 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1618354691460-8a83cbfb2192"
                  alt="Signature Bag"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Signature Bag</h3>
                  <p className="text-gray-400 text-sm">Bold gold clasp. Timeless structure.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1575913841088-6a7b6e66577c"
                  alt="Polished Blazer"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Polished Blazer</h3>
                  <p className="text-gray-400 text-sm">Effortless tailoring. Luxe comfort.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Checkout Drawer with Payment Form */}
      {cartOpen && checkout && !paymentComplete && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white text-black shadow-lg z-50 p-6 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Secure Checkout</h2>

          <div className="space-y-4">
            <Input type="text" placeholder="Full Name" className="w-full" />
            <Input type="email" placeholder="Email Address" className="w-full" />
            <Input type="text" placeholder="Card Number" className="w-full" />
            <div className="flex space-x-4">
              <Input type="text" placeholder="MM/YY" className="w-1/2" />
              <Input type="text" placeholder="CVV" className="w-1/2" />
            </div>
            <div className="text-sm text-gray-700">Subtotal: ${subtotal}.00</div>
            <Button className="w-full bg-black text-white hover:bg-neutral-900" onClick={() => setPaymentComplete(true)}>
              Pay Now
            </Button>
          </div>
        </div>
      )}

      {/* Payment Confirmation */}
      {cartOpen && checkout && paymentComplete && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white text-black shadow-lg z-50 p-6 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Payment Successful</h2>
          <p className="text-sm mb-2">Thank you for your purchase!</p>
          <p className="text-sm mb-2">Your order for <strong>{quantity}</strong> Layered Luxe Necklace(s) totaling <strong>${subtotal}.00</strong> has been confirmed.</p>
          <p className="text-sm mb-6">A confirmation email with your receipt and delivery estimate is on its way.</p>
          <Button className="w-full bg-black text-white hover:bg-neutral-900" onClick={() => { setCartOpen(false); setCheckout(false); setQuantity(1); setPaymentComplete(false); }}>
            Continue Shopping
          </Button>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-neutral-800 text-center text-gray-500 py-6 text-sm">
        &copy; {new Date().getFullYear()} LX Brand. All rights reserved.
      </footer>
    </div>
  );
}

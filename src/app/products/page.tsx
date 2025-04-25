'use client';

import React, {useState} from 'react';
import {products} from './data';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {Input} from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import MainNav from '@/components/ui/main-nav';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription} from '@/components/ui/dialog';
import {Label} from '@/components/ui/label';
import {Button} from '@/components/ui/button';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  // State to hold the edited product data
  const [editedProduct, setEditedProduct] = useState(null);

  const categories = ['All', 'Cannabis Flower', 'THC Oil', 'THC Edibles', 'CBD Oils', 'CBD Edibles'];

  const filteredProducts = products.filter(product => {
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = categoryFilter === 'All' || product.category === categoryFilter;
    return searchMatch && categoryMatch;
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setEditedProduct({...product}); // Initialize editedProduct with the selected product
    setOpen(true);
  };

  // Function to handle changes in the input fields
  const handleInputChange = (e, field) => {
    setEditedProduct({
      ...editedProduct,
      [field]: e.target.value,
    });
  };

  const handleEditSubmit = () => {
    // Here you would implement the logic to update the product in your data store
    // For now, we'll just close the dialog
    console.log('Edited Product:', editedProduct);
    setOpen(false);
  };

  return (
    <div className="container mx-auto py-10">
      <MainNav />
      <h1 className="text-3xl font-bold mb-5">Products Page</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Input
          type="text"
          placeholder="Search products..."
          className="flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SKU</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Store Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow key={product.sku} onClick={() => handleProductClick(product)}>
              <TableCell className="font-medium">{product.sku}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.storeLocation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
            <DialogDescription>
              {selectedProduct?.description}
            </DialogDescription>
          </DialogHeader>
          {editedProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={editedProduct.name}
                  className="col-span-3"
                  onChange={(e) => handleInputChange(e, 'name')}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={editedProduct.description}
                  className="col-span-3"
                  onChange={(e) => handleInputChange(e, 'description')}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input
                  id="category"
                  value={editedProduct.category}
                  className="col-span-3"
                  onChange={(e) => handleInputChange(e, 'category')}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  value={editedProduct.quantity}
                  className="col-span-3"
                  onChange={(e) => handleInputChange(e, 'quantity')}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="storeLocation" className="text-right">
                  Store Location
                </Label>
                <Input
                  id="storeLocation"
                  value={editedProduct.storeLocation}
                  className="col-span-3"
                  onChange={(e) => handleInputChange(e, 'storeLocation')}
                />
              </div>
            </div>
          )}
          <Button type="submit" onClick={handleEditSubmit}>
            Edit
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;


import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Toolbar, Container, Box, IconButton, Badge, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Divider, Button } from '@mui/material';

function NavBar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [cart] = useState([]); // Dummy cart for now
  const handleNavigation = () => {}; // Dummy handler for now

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#225c2b' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* ... existing code ... */}
          {/* Cart */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              size="large"
              aria-label="cart"
              color="inherit"
              onClick={() => handleNavigation('/cart')}
            >
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {/* Profile Icon */}
            <IconButton
              size="large"
              aria-label="profile"
              color="inherit"
              onClick={() => setProfileOpen(true)}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      {/* ... existing code ... */}
      {/* Profile Dialog */}
      <Dialog open={profileOpen} onClose={() => setProfileOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>User Profile</DialogTitle>
        <DialogContent>
          {/* Dummy user details for now */}
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <AccountCircleIcon sx={{ fontSize: 60, color: '#2E7D32', mb: 1 }} />
            <Typography variant="h6" gutterBottom>Vineeth Naik</Typography>
            <Typography variant="body2" color="text.secondary">vineeth@example.com</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2"><strong>Role:</strong> Farmer</Typography>
            <Typography variant="body2"><strong>Location:</strong> Hyderabad, India</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setProfileOpen(false)} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default NavBar; 
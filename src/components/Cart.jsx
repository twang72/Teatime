import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Cart() {
  return (
    <Badge badgeContent={2} color="error">
      <ShoppingCartOutlinedIcon color="action" />
    </Badge>
  );
}

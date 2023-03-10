function purchaseBook(title, author, price, discountPercentage, taxPercentage, isAvailable) {
    const TAX_RATE = 0.1; 
        let discountedPrice = price * (1 - (discountPercentage / 100)); 
        let discountAmount = price - discountedPrice; 
        let taxAmount = discountedPrice * (taxPercentage / 100); 
        let totalPrice = discountedPrice + taxAmount; 
        let IsAvailable = isAvailable;
    
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Price: $${price.toFixed(2)}`);
    console.log(`Discount: ${discountPercentage}%`);
    console.log(`Discount amount: $${discountAmount.toFixed(2)}`);
    console.log(`Price after discount: $${discountedPrice.toFixed(2)}`);
    console.log(`Tax: ${taxPercentage}%`);
    console.log(`Tax amount: $${taxAmount.toFixed(2)}`);
    console.log(`Total price: $${totalPrice.toFixed(2)}`);
    console.log('Is Available: ', IsAvailable); 
  }
  
  purchaseBook("GHOST HAUNTED IN DORMITORY", "Ryna", 400000, 18, 9.5, true);
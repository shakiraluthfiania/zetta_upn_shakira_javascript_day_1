function purchaseBook(title, author, price, discountPercentage, taxPercentage, stock, purchaseQuantity) {
    const TAX_RATE = 0.1; 
    let discountedPrice = price * (1 - (discountPercentage / 100)); 
    let discountAmount = price - discountedPrice; 
    let taxAmount = discountedPrice * (taxPercentage / 100); 
    let totalPrice = discountedPrice + taxAmount; 
    let canPurchase = true; 
        for (let i = 1; i <= purchaseQuantity; i++) {
            if (stock < i) {
                canPurchase = false;
                console.log(`Sorry, the stock of ${title} is not enough to fulfill the requested amount.`);
            break; 
            }
                stock -= i;
         }
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Price: $${price.toFixed(2)}`);
    console.log(`Discount: ${discountPercentage}%`);
    console.log(`Discount amount: $${discountAmount.toFixed(2)}`);
    console.log(`Price after discount: $${discountedPrice.toFixed(2)}`);
    console.log(`Tax: ${taxPercentage}%`);
    console.log(`Tax amount: $${taxAmount.toFixed(2)}`);
    console.log(`Total price: $${totalPrice.toFixed(2)}`);  
            if (canPurchase) {
             console.log(`You can still purchase ${stock} copies of ${title}.`);
                    } 
             else {
            console.log(`There are no more copies of ${title} available for purchase.`);
         }
  }
  
  purchaseBook("GHOST HAUNTED IN DORMITORY", "Ryna", 400000, 18, 9.5, true);
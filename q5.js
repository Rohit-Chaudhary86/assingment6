//Q5. You are building a shipping application. Write a program that takes the type of package ("standard",
//"express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
//based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
//"overnight" would be delivered the next day.
function calculatedelivery(typeofpackage){
    let deliverytime;
    switch(typeofpackage){
        case 'standard':
            deliverytime='3-5 days'
            break;
            case 'express':
                deliverytime='1-2 days'
                break;
                case 'overnight':
                    deliverytime=-'next day'
                    break;
                    default:
                        deliverytime='unknown'
    }
    return deliverytime
}
const packageType = prompt('Enter the type of package ("standard", "express", or "overnight"):');

// Calculate and print the estimated delivery time
const deliveryTime = calculateDeliveryTime(typeofpackage);
console.log(`Delivery time for ${packageType} package: ${deliveryTime}`);



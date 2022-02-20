const smartPhones = [
    { brand: "Samsung", price: 4500 },
    { brand: "iPhone", price: 7200 },
    { brand: "Sony", price: 3800 }
]

//task create a phone sale by subtracting 500 from each phone
const discountedPhones = smartPhones.map(phone => 
    {phone.price -= 500;
    return phone;
});

// task I am a poor boy... remove all phones that cost more than 4000
const poorBoy = smartPhones.filter(smartPhone => 
    smartPhone.price <= 4000);
console.log(poorBoy);
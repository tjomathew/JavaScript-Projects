document.addEventListener('DOMContentLoaded', function() {
    const prices = {
        sizes: {
            'Personal Pizza': 6.00,
            'Medium Pizza': 10.00,
            'Large Pizza': 14.00,
            'Extra Large Pizza': 16.00
        },
        toppings: {
            'Pepperoni': 1.00,
            'Sausage': 1.00,
            'Canadian Bacon': 2.00,
            'Ground Beef': 1.00,
            'Anchovy': 1.50,
            'Chicken': 1.50
        }
    };

    const btnOrder = document.getElementById('btnOrder');
    const showText = document.getElementById('showText');
    const totalPrice = document.getElementById('totalPrice');
    const sizeRadios = document.querySelectorAll('input[name="Size"]');
    const toppingCheckboxes = document.querySelectorAll('input[name="Topping"]');

    let order = {
        size: 'Large Pizza',
        toppings: [],
        subtotal: 0.00,
        tax: 0.00,
        total: 0.00
    };

    btnOrder.addEventListener('click', getReceipt);
    
    sizeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            order.size = this.value;
        });
    });

    toppingCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                order.toppings.push(this.value);
            } else {
                order.toppings = order.toppings.filter(topping => topping !== this.value);
            }
        });
    });

    function getReceipt() {
        order.subtotal = calculateSubtotal();
        order.tax = order.subtotal * 0.08;
        order.total = order.subtotal + order.tax;

        showText.innerHTML = generateOrderText();
        totalPrice.innerHTML = generatePriceText();
    }

    function calculateSubtotal() {
        let subtotal = prices.sizes[order.size];
        
        order.toppings.forEach(topping => {
            subtotal += prices.toppings[topping];
        });

        return subtotal;
    }

    function generateOrderText() {
        let text = `<h3>Your Order:</h3>`;
        text += `<p><strong>Size:</strong> ${order.size}</p>`;
        
        if (order.toppings.length > 0) {
            text += `<p><strong>Toppings:</strong></p><ul>`;
            order.toppings.forEach(topping => {
                text += `<li>${topping} ($${prices.toppings[topping].toFixed(2)})</li>`;
            });
            text += `</ul>`;
        } else {
            text += `<p>No toppings selected</p>`;
        }

        return text;
    }

    function generatePriceText() {
        let text = `<h3>Price Summary:</h3>`;
        text += `<p>Subtotal: $${order.subtotal.toFixed(2)}</p>`;
        text += `<p>Tax (8%): $${order.tax.toFixed(2)}</p>`;
        text += `<p style="font-weight: bold; color: #d32f2f;">Total: $${order.total.toFixed(2)}</p>`;
        text += `<p style="font-style: italic;">Thank you for your order!</p>`;
        
        return text;
    }

    const defaultSize = document.querySelector('input[name="Size"]:checked');
    if (defaultSize) {
        order.size = defaultSize.value;
    }
});
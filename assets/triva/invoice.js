jQuery(document).ready(function(){
    jQuery().invoice({
        addRow : "#addRow",
        delete : ".delete",
        parentClass : ".item-row",

        price : ".price",
        qty : ".qty",
        total : ".total",
        totalQty: "#totalQty",

        subtotal : "#subtotal",
        discount: "#discount",
        shipping : "#shipping",
        grandTotal : "#grandTotal"
    });
});
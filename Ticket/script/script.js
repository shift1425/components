function generateBarcode(value){
    let barcodeValue = value 
    JsBarcode('#barcode', barcodeValue, {
        background:'#ecedef',
        lineColor:'#000000',
        width: 1,
        height: 32,
        displayValue: false
        
    })
}
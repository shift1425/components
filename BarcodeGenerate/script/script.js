function generateBarcode(){
    let barcodeValue = document.getElementById('barcode-value').value
    JsBarcode('#barcode', barcodeValue, {
        background:'#143754',
        lineColor:'#ffffff',
    })
}
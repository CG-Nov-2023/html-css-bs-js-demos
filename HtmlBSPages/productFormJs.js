function addProduct(){
    let pId = document.getElementById("prodId").value;
    let pName = document.getElementById("prodName").value;
    let pCategory = document.getElementById("prodCategory").value;
    let pCost = document.getElementById("prodCost").value;

    // string
    let displayData = "<p>Product ID: " + pId 
                        + "</p><p>Product Name: " + pName 
                        + "</p><p>Product Category: " + pCategory + 
                        "</p><p>Product Cost: " + pCost + "</p>";

    // template strings - introduced in ES6
    let displayData1 = `<p>Product ID: ${pId}</p>
                        <p>Product Name: ${pName}</p>
                        <p>ProductCategory: ${pCategory}</p>
                        <p>ProductCost: ${pCost} 
                        `
    
    //document.getElementById("display").innerHTML = displayData;
    document.getElementById("display").innerHTML = displayData1;
}
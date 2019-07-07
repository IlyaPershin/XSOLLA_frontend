const mydata = JSON.parse(data);

function on_page_load() {
	var count = Object.keys(mydata).length
	for (var i = 0; i < count; i++){
		addRow(i);
	}
}

function addRow(i) {
	var tableBody=document.getElementById("table");
	var newRow=document.createElement("tr");
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.id;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.project.id;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.project.name;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.payment_method.id;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.payment_method.name;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.transfer_date;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.refund_reason;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.status;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.external_id;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.dry_run;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].transaction.is_refund_allowed;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].user.id;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].user.name;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].user.email;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].user.phone;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].user.country;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].payment_details.payment.currency;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].payment_details.payment.amount;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].payment_details.payment.amount_from_ps;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].payment_details.sales_tax.percent;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].payment_details.sales_tax.amount;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].purchase.virtual_currency.amount;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].purchase.virtual_currency.name;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].purchase.virtual_items;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].purchase.simple_checkout.amount;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].purchase.simple_checkout.currency;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].purchase.pin_codes.amount;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].purchase.pin_codes.currency;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].purchase.pin_codes.content;
	newRow.appendChild(newCell);
	
	var newCell=document.createElement("td");
	newCell.innerHTML = mydata[i].purchase.subscription.name;
	newRow.appendChild(newCell);
	
	tableBody.appendChild(newRow);
}
var myURLCliente='https://gc234accf0a52a8-qrxnnvxc00375h2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client';
function getClients(){

	$.ajax({    
	    url : myURLCliente,
	    type : 'GET',
	    dataType : 'json',
	    success : function(clients) {
	   		let cs=clients.items;
	   		$("#clients").empty();
	   		for(let i=0;i<cs.length;i++){
	   			let k=cs[i].id+" "+cs[i].name+" "+cs[i].email+" "+cs[i].age+" <button onclick='deleteClient("+cs[i].id+")'>borrar</button>";
	   			k+=" <button onclick='getDetailClient("+cs[i].id+")'>actualizar</button><br>"
	   			$("#clients").append(k);
	   		}

	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});
}
function getClientInfo(){
	let idClient=$("#idClient").val();
	let nameClient=$("#nameClient").val();
	let emailClient=$("#emailClient").val();
	let ageClient=$("#ageClient").val();

	let client={
		id:idClient,
		name:nameClient,
		email:emailClient,
		age:ageClient
	};

	return client;
}
function cleanInputs(){
	$("#idClient").val("");
	$("#nameClient").val("");
	$("#emailClient").val("");
	$("#ageClient").val("");
}

function saveClient(){

	let data=getClientInfo();
	let dataToSend=JSON.stringify(data);

	console.log(data);
	console.log(dataToSend);

	$.ajax({    
	    url : 'https://gc234accf0a52a8-qrxnnvxc00375h2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'POST',
	    contentType : 'application/json',
	    data:dataToSend,
	    success : function(clients) {
	    	cleanInputs();
	   		getClients();
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});

}

function deleteClient(idClient){

	let data={id:idClient};
	let dataToSend=JSON.stringify(data);
	$.ajax({    
	    url : 'https://gc234accf0a52a8-qrxnnvxc00375h2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'DELETE',
	    contentType : 'application/json',
	    data:dataToSend,
	    success : function(clients) {
	    	cleanInputs();
	   		getClients();
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});
}

function updateClient(){

	let data=getClientInfo();
	let dataToSend=JSON.stringify(data);

	console.log(data);
	console.log(dataToSend);

	$.ajax({    
	    url : 'https://gc234accf0a52a8-qrxnnvxc00375h2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'PUT',
	    contentType : 'application/json',
	    data:dataToSend,
	    success : function(clients) {
	    	cleanInputs();
	   		getClients();
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});

}
function getDetailClient(idClient){

	$.ajax({    
	    url : myURLCliente+"/"+idClient,
	    type : 'GET',
	    dataType : 'json',
	    success : function(clients) {
	   		let cs=clients.items;
	   		
	   		$("#idClient").val(cs[0].id);
			$("#nameClient").val(cs[0].name);
			$("#emailClient").val(cs[0].email);
			$("#ageClient").val(cs[0].age);

	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});
}

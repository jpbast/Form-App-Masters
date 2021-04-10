function buildRequest(firstInputs, cep) {
    const [nome, email, phone, addressZip] = [...firstInputs]
    let lastInputs, addressStreet, addressNumber, addressComplement, addressState, addressCity, addressDistrict;

    // Se o CEP for válido, pega os valores referentes ao endereço
    if (cep) {
        lastInputs = document.getElementById('second').children 

        addressStreet = lastInputs[0].firstChild.lastChild.value
        addressNumber = lastInputs[1].firstChild.lastChild.value
        addressComplement = lastInputs[2].firstChild.lastChild.value
        addressDistrict = lastInputs[3].firstChild.lastChild.value
        addressCity = lastInputs[4].firstChild.lastChild.value
        addressState = lastInputs[5].firstChild.lastChild.value
    }
    const body = {
        name: nome.value,
        email: email.value,
        phone: phone.value.replace('(', '',).replace(')', '').replace(' ', '').replace('-', ''),
        addressZip: addressZip.value.replace('-', ''),
        addressStreet,
        addressNumber,
        addressComplement,
        addressDistrict,
        addressCity,
        addressState
    }
    return body
}

export default buildRequest
document.addEventListener('DOMContentLoaded', function () {
    const rollDiceButton = document.getElementById('rollDiceButton');
    const diceResultSpan = document.getElementById('diceResultSpan');
    const characterForm = document.getElementById('characterForm');
    const characterSheet = document.getElementById('characterSheet');
    const characterDetails = document.getElementById('characterDetails');
    const requiredFields = ['name', 'characterClass', 'region', 'faith'];

    const inputFile = document.querySelector("#picture__input");
    const pictureImage = document.querySelector(".picture__image");
    const pictureImageTxt = "Choose an image";
    pictureImage.innerHTML = pictureImageTxt;

    function rollDice() {
        const diceQuantity = parseInt(document.getElementById('diceQuantity').value);
        const diceSides = parseInt(document.getElementById('diceSides').value);
        let totalRoll = 0;
        let individualRolls = [];

        for (let i = 0; i < diceQuantity; i++) {
            const diceRoll = Math.floor(Math.random() * diceSides) + 1;
            individualRolls.push(diceRoll);
            totalRoll += diceRoll;
        }

        diceResultSpan.textContent = `${totalRoll} (${individualRolls.join(', ')})`;
    }

    function displayCharacterSheet(formData) {
        const characterSheetContent = `
            <div id="characterSheetContent">
                <h2>Dados do Personagem</h2>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" value="${formData.get('name')}"><br>
    
                <label for="characterClass">Classe:</label>
                <input type="text" id="characterClass" name="characterClass" value="${formData.get('characterClass')}"><br>
    
                <label for="region">Região (Origem):</label>
                <input type="text" id="region" name="region" value="${formData.get('region')}"><br>
    
                <label for="faith">Fé:</label>
                <input type="text" id="faith" name="faith" value="${formData.get('faith')}"><br>
    
                <label for="background">Antecedente:</label>
                <input type="text" id="background" name="background" value="${formData.get('background')}"><br>
    
                <label for="ageReal">Idade (real):</label>
                <input type="number" id="ageReal" name="ageReal" value="${formData.get('ageReal')}"><br>
    
                <label for="ageApparent">Idade (aparente):</label>
                <input type="number" id="ageApparent" name="ageApparent" value="${formData.get('ageApparent')}"><br>
    
                <!-- ... (outros campos de Dados do Personagem) ... -->
    
                <h2>Atributos</h2>
                <p><strong>FORÇA:</strong> ${formData.get('strength')}</p>
                <p><strong>AGILIDADE:</strong> ${formData.get('agility')}</p>
                <p><strong>SABEDORIA:</strong> ${formData.get('wisdom')}</p>
                <p><strong>INTELIGÊNCIA:</strong> ${formData.get('intelligence')}</p>
                <p><strong>SORTE:</strong> ${formData.get('luck')}</p>
                <p><strong>ADAPTABILIDADE:</strong> ${formData.get('adaptability')}</p>
                <p><strong>CARISMA:</strong> ${formData.get('charisma')}</p>
    
                <h2>Habilidades</h2>
                <p><strong>Habilidade 1:</strong> ${formData.get('ability1')}</p>
                <p><strong>Habilidade 2:</strong> ${formData.get('ability2')}</p>
                <p><strong>Habilidade 3:</strong> ${formData.get('ability3')}</p>
                <p><strong>Habilidade 4:</strong> ${formData.get('ability4')}</p>
                
                <h2>Perícias</h2>
                <p><strong>Perícia 1:</strong> ${formData.get('skill1')}</p>
                <p><strong>Perícia 2:</strong> ${formData.get('skill2')}</p>
                <p><strong>Perícia 3:</strong> ${formData.get('skill3')}</p>
                <p><strong>Perícia 4:</strong> ${formData.get('skill4')}</p>
                <p><strong>Perícia 5:</strong> ${formData.get('skill5')}</p>
                <p><strong>Perícia 6:</strong> ${formData.get('skill6')}</p>
                <p><strong>Perícia 7:</strong> ${formData.get('skill7')}</p>
                <p><strong>Perícia 8:</strong> ${formData.get('skill8')}</p>
                <p><strong>Perícia 9:</strong> ${formData.get('skill9')}</p>
                <p><strong>Perícia 10:</strong> ${formData.get('skill10')}</p>
                <!-- ... (campos de Perícias) ... -->
    
                
    <h2>Itens</h2>
    <div class="items">
        <h3>Consumíveis:</h3>
        <div class="item">
            <p><strong>Consumível 1:</strong> ${formData.get('consumable1')}</p>
        </div>
        <div class="item">
            <p><strong>Consumível 2:</strong> ${formData.get('consumable2')}</p>
        </div>
        <div class="item">
            <p><strong>Consumível 3:</strong> ${formData.get('consumable3')}</p>
        </div>
    </div>
    <div class="items">
        <h3>Armadura:</h3>
        <div class="item">
            <p><strong>Nome da Armadura:</strong> ${formData.get('armorName')}</p>
        </div>
        <div class="item">
            <p><strong>Defesa Proporcionada:</strong> ${formData.get('armorDefense')}</p>
        </div>
        <div class="item">
            <p><strong>Resistência:</strong> ${formData.get('armorResistance')}</p>
        </div>
        <!-- ... (outros campos de Armadura) ... -->
    </div>
    <div class="items">
        <h3>Arma:</h3>
        <div class="item">
            <p><strong>Nome da Arma:</strong> ${formData.get('weaponName')}</p>
        </div>
        <div class="item">
            <p><strong>Nível:</strong> ${formData.get('weaponLevel')}</p>
        </div>
        <div class="item">
            <p><strong>Habilidade 1:</strong> ${formData.get('weaponAbility1')}</p>
        </div>
        <!-- ... (outros campos de Arma) ... -->
    </div>


        `;
    
        characterSheet.style.display = 'block';
        characterDetails.innerHTML = characterSheetContent;
    }
    

    rollDiceButton.addEventListener('click', rollDice);

    characterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Verificar se todos os campos obrigatórios estão preenchidos
        let formIsValid = true;

        requiredFields.forEach(field => {
            const input = document.getElementById(field);
            if (input.value.trim() === '') {
                formIsValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (formIsValid) {
            displayCharacterSheet(new FormData(characterForm));
        } else {
            characterSheet.style.display = 'none';
            characterDetails.innerHTML = '<p class="error-message">Preencha todos os campos obrigatórios.</p>';
        }
    });

    inputFile.addEventListener("change", function (e) {
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", function (e) {
                const readerTarget = e.target;

                const img = document.createElement("img");
                img.src = readerTarget.result;
                img.classList.add("picture__img");

                pictureImage.innerHTML = "";
                pictureImage.appendChild(img);
            });

            reader.readAsDataURL(file);
        } else {
            pictureImage.innerHTML = pictureImageTxt;
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const characterForm = document.getElementById('characterForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    // Configuração do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAxH5o_IV9WZn72FyYUeyM4JbF4ls4cvqw",
        authDomain: "ficha-teste-ad5fa.firebaseapp.com",
        projectId: "ficha-teste-ad5fa",
        storageBucket: "ficha-teste-ad5fa.appspot.com",
        messagingSenderId: "890260354540",
        appId: "1:890260354540:web:7b64a2205de5a347fc3cc9"
      };
  
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    
    // Evento de envio do formulário
    characterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Obtenha os dados do formulário (substitua pelos seus campos)
        const formData = {
            name: document.getElementById('name').value,
            characterClass: document.getElementById('characterClass').value,
            region: document.getElementById('region').value,
            faith: document.getElementById('faith').value,
            background: document.getElementById('background').value,
            ageReal: document.getElementById('ageReal').value,
            ageApparent: document.getElementById('ageApparent').value,
            strength: document.getElementById('strength').value,
            agility: document.getElementById('agility').value,
            wisdom: document.getElementById('wisdom').value,
            intelligence: document.getElementById('intelligence').value,
            luck: document.getElementById('luck').value,
            adaptability: document.getElementById('adaptability').value,
            charisma: document.getElementById('charisma').value,
            skill1: document.getElementById('skill1').value,
            skill2: document.getElementById('skill2').value,
            skill3: document.getElementById('skill3').value,
            skill4: document.getElementById('skill4').value,
            skill5: document.getElementById('skill5').value,
            skill6: document.getElementById('skill6').value,
            skill7: document.getElementById('skill7').value,
            skill8: document.getElementById('skill8').value,
            skill9: document.getElementById('skill9').value,
            skill10: document.getElementById('skill10').value,
            ability1: document.getElementById('ability1').value,
            ability2: document.getElementById('ability2').value,
            ability3: document.getElementById('ability3').value,
            ability4: document.getElementById('ability4').value,
            consumable1: document.getElementById('consumable1').value,
            consumable2: document.getElementById('consumable2').value,
            consumable3: document.getElementById('consumable3').value,
            armorName: document.getElementById('armorName').value,
            armorDefense: document.getElementById('armorDefense').value,
            armorResistance: document.getElementById('armorResistance').value,
            armorAbility1: document.getElementById('armorAbility1').value,
            armorAbility2: document.getElementById('armorAbility2').value,
            armorAbility3: document.getElementById('armorAbility3').value,
            armorDurability: document.getElementById('armorDurability').value,
            weaponName: document.getElementById('weaponName').value,
            weaponLevel: document.getElementById('weaponLevel').value,
            weaponAbility1: document.getElementById('weaponAbility1').value,
            weaponAbility2: document.getElementById('weaponAbility2').value,
            weaponAbility3: document.getElementById('weaponAbility3').value,
            weaponDurability: document.getElementById('weaponDurability').value,
            weaponDamage: document.getElementById('weaponDamage').value,
            // ... outros campos da ficha de personagem
        };
        
        // Salvar dados no Cloud Firestore
        db.collection('characters').add(formData)
            .then(() => {
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
            })
            .catch(error => {
                console.error(error);
                successMessage.style.display = 'none';
                errorMessage.style.display = 'block';
            });
    });
});

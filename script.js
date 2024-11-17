// function getHoroscope() {
//     const zodiacSign = document.getElementById('zodiac').value;

//     const predictions = {
//         aries: {
//             work: "วันนี้คุณจะพบเจอโอกาสใหม่ๆ ในการทำงาน",
//             love: "ความรักของคุณกำลังสดใสและมีโอกาสใหม่ๆ เข้ามา",
//             finance: "การเงินมีแนวโน้มที่จะดีขึ้น แต่อย่าลืมประหยัด",
//             health: "สุขภาพดี ควรออกกำลังกายเพื่อรักษาร่างกาย"
//         },
//         taurus: {
//             work: "วันนี้อาจต้องตัดสินใจเรื่องสำคัญในงาน คิดให้รอบคอบ",
//             love: "อาจมีปัญหาเล็กน้อยในความสัมพันธ์ ควรพูดคุยกัน",
//             finance: "การเงินมีความมั่นคง แต่ควรจัดการอย่างรอบคอบ",
//             health: "สุขภาพต้องการการดูแลเรื่องการพักผ่อนให้เพียงพอ"
//         },
//         gemini: {
//             work: "วันนี้เหมาะกับการพบปะเพื่อนร่วมงานใหม่ๆ",
//             love: "ความรักมีเสน่ห์ มีโอกาสพบคนที่ใช่",
//             finance: "การเงินค่อนข้างดี มีโชคลาภเล็กน้อย",
//             health: "สุขภาพดี ควรดูแลตัวเองจากความเครียด"
//         },
//         cancer: {
//             work: "คุณอาจรู้สึกถึงการเปลี่ยนแปลงที่สำคัญในงาน",
//             love: "วันนี้มีโอกาสในการสร้างความสัมพันธ์ที่ลึกซึ้ง",
//             finance: "การเงินมีการเปลี่ยนแปลงในทิศทางที่ดีขึ้น",
//             health: "ควรดูแลระบบย่อยอาหารเป็นพิเศษ"
//         },
//         leo: {
//             work: "วันนี้เป็นวันที่ดีในการลงทุนทางธุรกิจ",
//             love: "ความรักมีความราบรื่นและอบอุ่น",
//             finance: "คุณจะพบโอกาสในการเพิ่มรายได้",
//             health: "สุขภาพดี ควรใส่ใจการพักผ่อนอย่างเต็มที่"
//         },
//         virgo: {
//             work: "คุณจะได้รับแรงบันดาลใจใหม่ในการทำงาน",
//             love: "ความรักมีแนวโน้มที่จะพบเจอความท้าทายใหม่",
//             finance: "การเงินมีความมั่นคง สามารถวางแผนล่วงหน้าได้",
//             health: "ควรดูแลเรื่องการนอนให้เพียงพอ"
//         },
//         libra: {
//             work: "วันนี้เป็นวันที่คุณรู้สึกถึงความสมดุลในการทำงาน",
//             love: "มีโอกาสพบเจอคนพิเศษที่สอดคล้องกับคุณ",
//             finance: "การเงินมีเสถียรภาพและสมดุล",
//             health: "สุขภาพดี ควรหมั่นทำกิจกรรมเพื่อผ่อนคลาย"
//         },
//         scorpio: {
//             work: "มีโอกาสในการเติบโตทางหน้าที่การงาน",
//             love: "คุณอาจพบเจอความท้าทายในความสัมพันธ์",
//             finance: "การเงินมีโอกาสที่จะพบความสำเร็จ",
//             health: "สุขภาพแข็งแรง ควรใส่ใจเรื่องการออกกำลังกาย"
//         },
//         sagittarius: {
//             work: "วันนี้เหมาะกับการพัฒนาทักษะและความสามารถ",
//             love: "ความรักอยู่ในช่วงที่เปิดกว้างและมีโอกาสพบคนใหม่",
//             finance: "การเงินมั่นคง แต่ควรจัดสรรงบประมาณให้ดี",
//             health: "ควรดูแลเรื่องอาหารและการพักผ่อน"
//         },
//         capricorn: {
//             work: "คุณจะมีความสำเร็จในด้านการทำงานที่คาดหวัง",
//             love: "ความรักมีเสน่ห์และอบอุ่น ควรให้เวลาแก่คนรัก",
//             finance: "การเงินมีแนวโน้มที่จะได้รับผลตอบแทนดี",
//             health: "สุขภาพแข็งแรง ควรหมั่นออกกำลังกาย"
//         },
//         aquarius: {
//             work: "วันนี้เหมาะกับการวางแผนและเตรียมตัวเพื่ออนาคต",
//             love: "ความรักอยู่ในช่วงที่มีความเข้าใจซึ่งกันและกัน",
//             finance: "การเงินมีความมั่นคงและสามารถวางแผนล่วงหน้าได้",
//             health: "สุขภาพดี ควรเน้นการดูแลร่างกายให้สมดุล"
//         },
//         pisces: {
//             work: "งานวันนี้มีการเติบโตและพัฒนาที่ดี",
//             love: "คุณอาจพบคนที่ทำให้รู้สึกดีเป็นพิเศษ",
//             finance: "มีโอกาสในการเพิ่มรายได้จากแหล่งใหม่",
//             health: "สุขภาพดี ควรดูแลตัวเองจากอาการเมื่อยล้า"
//         }
//     };

//     const result = predictions[zodiacSign];
    
//     if (result) {
//         document.getElementById('work').innerText = result.work;
//         document.getElementById('love').innerText = result.love;
//         document.getElementById('finance').innerText = result.finance;
//         document.getElementById('health').innerText = result.health;
//     } else {
//         document.getElementById('work').innerText = "กรุณาเลือกราศี";
//         document.getElementById('love').innerText = "";
//         document.getElementById('finance').innerText = "";
//         document.getElementById('health').innerText = "";
//     }
// }

function drawCards() {
    const cards = [
        { 
            name: "ไพ่แห่งความสำเร็จ", 
            description: "วันนี้คุณจะประสบความสำเร็จในสิ่งที่คาดหวัง", 
            image: "https://example.com/images/success.jpg" 
        },
        { 
            name: "ไพ่แห่งความรัก", 
            description: "วันนี้ความรักของคุณสดใสและมีความสุข", 
            image: "https://example.com/images/love.jpg" 
        },
        { 
            name: "ไพ่แห่งโชคลาภ", 
            description: "คุณอาจได้รับโชคลาภเล็กน้อยจากคนใกล้ตัว", 
            image: "https://example.com/images/fortune.jpg" 
        },
        { 
            name: "ไพ่แห่งการเริ่มต้น", 
            description: "เป็นเวลาที่เหมาะสมสำหรับการเริ่มสิ่งใหม่", 
            image: "https://example.com/images/start.jpg" 
        },
        { 
            name: "ไพ่แห่งความท้าทาย", 
            description: "วันนี้คุณอาจพบเจออุปสรรค แต่จะผ่านไปได้", 
            image: "https://example.com/images/challenge.jpg" 
        },
        { 
            name: "ไพ่แห่งการพักผ่อน", 
            description: "ควรให้เวลาตัวเองเพื่อพักผ่อนและฟื้นฟูพลัง", 
            image: "https://example.com/images/relax.jpg" 
        },
        { 
            name: "ไพ่แห่งสุขภาพ", 
            description: "สุขภาพของคุณแข็งแรง แต่ควรใส่ใจเรื่องอาหารการกิน", 
            image: "https://example.com/images/health.jpg" 
        },
        { 
            name: "ไพ่แห่งความสมดุล", 
            description: "ชีวิตของคุณจะสมดุลและเต็มไปด้วยความสงบสุข", 
            image: "https://example.com/images/balance.jpg" 
        },
        { 
            name: "ไพ่แห่งโอกาส", 
            description: "โอกาสดี ๆ กำลังจะเข้ามาในชีวิตคุณ", 
            image: "https://example.com/images/opportunity.jpg" 
        }
    ];

    // สุ่มไพ่ 3 ใบ
    const selectedCards = [];
    while (selectedCards.length < 3) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        if (!selectedCards.includes(cards[randomIndex])) {
            selectedCards.push(cards[randomIndex]);
        }
    }

    // แสดงไพ่
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = ''; // ลบไพ่เก่า
    selectedCards.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.className = 'card';
        cardElement.src = card.image;
        cardElement.alt = card.name;
        cardsContainer.appendChild(cardElement);
    });

    // แสดงผลการทำนาย
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<h2>ผลการทำนาย:</h2>';

    const summary = [];
    selectedCards.forEach((card, index) => {
        // แสดงผลของไพ่แต่ละใบ
        const cardResult = document.createElement('p');
        cardResult.textContent = `ไพ่ใบที่ ${index + 1}: ${card.description}`;
        resultContainer.appendChild(cardResult);

        // เพิ่มคำทำนายลงใน summary
        summary.push(card.description);
    });

    // แสดงผลการทำนายแบบสรุปรวม
    const summaryResult = document.createElement('p');
    summaryResult.style.fontWeight = "bold";
    summaryResult.style.marginTop = "20px";
    summaryResult.textContent = `สรุปรวม: ${summary.join(' ')}`;
    resultContainer.appendChild(summaryResult);
}

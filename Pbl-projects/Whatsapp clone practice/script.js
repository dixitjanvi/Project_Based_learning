// --- DATA: Contacts with 20+ Replies for Main Chats ---

const contactsData = [
    { 
        id: 1, name: "Anupriya", img: "9", 
        chatHistory: [
            { text: "Hey, kaisi hai?", type: "received", time: "Yesterday" },
            { text: "Main badhiya hu, tu bata?", type: "sent", time: "Yesterday" },
            { text: "Shopping chalna hai kya aaj?", type: "received", time: "Yesterday" },
            { text: "Haan kyu nahi, main ready hu.", type: "sent", time: "10:00 AM" }
        ],
        // 20 Replies set for Anupriya
        replyPool: [
            "Haan chalte hain!", "Konsi market jaana hai?", "Yaar aaj thoda busy hu.", 
            "Zara wo pink dress ki photo bhejna.", "Late ho jayega, kal chalein?", 
            "Mummy nahi maan rahi yaar.", "Paise nahi hain abhi mere paas.", "Tujhe wo ladka yaad hai?",
            "Mere paas kuch pehanne ko nahi hai.", "Online order kar lete hain na.", 
            "Bhoook lagi hai, pehle khana khayenge.", "Selfie lenge wahan!", 
            "Makeup kaisa karu?", "Cab book karli?", "Mera mood off hai aaj.",
            "Wow! Nice idea.", "Nahi yaar, main thak gayi hu.", "Tu akele chali ja please.",
            "Call karti hu 5 min mein.", "Hahaha sahi hai!"
        ] 
    },
    { 
        id: 2, name: "Crime Partner 😈", img: "10", 
        chatHistory: [
            { text: "Oye sunn!!", type: "received", time: "Yesterday" },
            { text: "Kya hua?? Sab theek hai?", type: "sent", time: "Yesterday" },
            { text: "Wo tera crush dikha tha market mein 😂", type: "received", time: "Yesterday" },
            { text: "Sach bata?? Kiske saath tha?", type: "sent", time: "11:30 AM" }
        ],
        // 20 Replies set for Crime Partner
        replyPool: [
            "Akela tha bechara 😂", "Maine hello bola usse.", "Tere baare mein puch raha tha.", 
            "Bhai tera banda smart toh hai.", "Tu kab propose karegi?", "Ghumne chalein momos khane?",
            "Mere paas ek nayi gossip hai.", "Sunn, tujhe pata hai kya hua?", "Bore ho rahi hu main.",
            "Mera homework kar de please.", "Movie dekhne chalein?", "Tu kitni acchi hai yaar.",
            "Pagli hai tu poori.", "Hahaha lol!", "Ek photo bheji hai dekh.", 
            "Instagram check kar jaldi.", "Video call karu?", "Aaj plan cancel.",
            "Shopping pe chalte hain.", "Tu meri best friend hai ❤️"
        ] 
    },
    { 
        id: 3, name: "Cousins", img: "12", 
        chatHistory: [
            { text: "Trip plan karein?", type: "sent", time: "Monday" },
            { text: "Main ready hu.", type: "received", time: "Monday" },
            { text: "Mummy se permission lelo pehle.", type: "received", time: "Yesterday" }
        ],
        replyPool: ["Goa chalte hain pakka.", "Video call karo sab.", "Meri job lagne do phir chalenge.", "Tu sponsor karegi toh chalunga."] 
    },
    { 
        id: 4, name: "Didi ❤️", img: "5", 
        chatHistory: [
            { text: "Ghar kab aayegi?", type: "received", time: "2:00 PM" },
            { text: "Bas nikal rahi hu.", type: "sent", time: "2:10 PM" },
            { text: "Aate hue dhaniya le aana.", type: "received", time: "2:15 PM" }
        ],
        replyPool: ["Jyada natak mat kar.", "Mummy ko bol dungi phir.", "Mere liye chocolate lana.", "Jaldi aa, bhook lagi hai."] 
    },
    { 
        id: 5, name: "Rahul Bhai", img: "11", 
        chatHistory: [
            { text: "Mummy gussa hain, jaldi ghar aa.", type: "received", time: "6:00 PM" },
            { text: "Kyu? Maine kya kiya ab?", type: "sent", time: "6:05 PM" }
        ],
        replyPool: ["Tu toh gayi aaj 😂", "Mere paise wapas kar.", "Remote kahan chupaya hai?", "Main bacha lunga, party deni padegi."] 
    },
    { 
        id: 6, name: "Gouri", img: "20", 
        chatHistory: [
            { text: "Notes bhej de please.", type: "received", time: "Yesterday" },
            { text: "Kaunse subject ke?", type: "sent", time: "Yesterday" }
        ],
        replyPool: ["Thanks yaar!", "Handwriting samajh nahi aa rahi.", "Kal class chalegi?", "Treat due hai teri."] 
    },
    { 
        id: 7, name: "Samiksha", img: "22", 
        chatHistory: [
            { text: "Dp nice dear ❤️", type: "received", time: "Yesterday" },
            { text: "Thank you!!", type: "sent", time: "Yesterday" }
        ],
        replyPool: ["Kahan se li dress?", "Miss you!", "Milte hain jaldi.", "So pretty 😍"] 
    },
    { 
        id: 8, name: "Amazon Delivery", img: "68", 
        chatHistory: [
            { text: "Your package is out for delivery.", type: "received", time: "10:00 AM" },
            { text: "Okay, call before coming.", type: "sent", time: "10:05 AM" }
        ],
        replyPool: ["Sir location share karein.", "Main gate par hu.", "OTP bataiye 4567.", "Package delivered."] 
    },
    { 
        id: 9, name: "Princesses 👑", img: "25", 
        chatHistory: [
            { text: "Girls night out??", type: "received", time: "Friday" },
            { text: "I am in! 💃", type: "sent", time: "Friday" }
        ],
        replyPool: ["Pizza order karein?", "Mummy nahi manengi yaar.", "Photos bhej group pe.", "Let's dance!"] 
    },
    { 
        id: 12, name: "Abhay", img: "55", 
        chatHistory: [
            { text: "Kal movie chalna hai?", type: "received", time: "6 PM" },
            { text: "Dekhti hu, batati hu.", type: "sent", time: "6:30 PM" }
        ], 
        replyPool: ["Ticket book kar lu?", "Jaldi bata.", "Main wait kar raha hu.", "Cancel mat karna."] 
    },
    { id: 10, name: "Unknown", img: "1", chatHistory: [{text: "Hi", type:"received", time:"Yesterday"}], replyPool: ["Sorry wrong number."] },
    { id: 11, name: "Ankit", img: "53", chatHistory: [{text: "Assignment bheja?", type:"received", time:"Mon"}], replyPool: ["Thanks", "Ok"] },
    { id: 13, name: "Niya", img: "44", chatHistory: [{text: "Happy bday!", type:"sent", time:"Dec 5"}], replyPool: ["Thanks babe", "Party soon"] },
    { id: 14, name: "Subhi", img: "41", chatHistory: [{text: "Reel link sent", type:"received", time:"2 PM"}], replyPool: ["Lol", "Funny hai"] },
    { id: 15, name: "John Smith", img: "33", chatHistory: [{text: "Meeting at 5", type:"received", time:"1 PM"}], replyPool: ["Ok", "Noted"] },
    { id: 16, name: "College Friends", img: "60", chatHistory: [{text: "Bunk??", type:"received", time:"9 AM"}], replyPool: ["Chalo", "Attendance short hai"] },
    { id: 17, name: "Khushi", img: "29", chatHistory: [{text: "Makeup artist number?", type:"received", time:"Sun"}], replyPool: ["Sending", "Wait"] },
    { id: 18, name: "Piyush", img: "59", chatHistory: [{text: "Bike keys?", type:"received", time:"Yesterday"}], replyPool: ["Drawer mein hain", "Nahi pata"] },
    { id: 19, name: "Stranger", img: "3", chatHistory: [{text: "Hello", type:"received", time:"Yesterday"}], replyPool: ["Who?", "Bye"] },
    { id: 20, name: "Manvi", img: "24", chatHistory: [{text: "Call me", type:"received", time:"10 PM"}], replyPool: ["Ok", "Busy"] }
];

let currentChatId = null;

// Select Elements
const contactListEl = document.getElementById('contact-list');
const chatPlaceholder = document.getElementById('chat-placeholder');
const chatInterface = document.getElementById('chat-interface');
const messagesBox = document.getElementById('messages-box');
const activeName = document.getElementById('active-name');
const activeImg = document.getElementById('active-img');
const msgInput = document.getElementById('msg-input');
const sendBtn = document.getElementById('send-btn');
const emojiBtn = document.getElementById('emoji-btn');
const emojiPicker = document.getElementById('emoji-picker');

// 1. RENDER SIDEBAR LIST (No Ticks Here)
function renderContacts() {
    contactListEl.innerHTML = "";
    contactsData.forEach(contact => {
        const lastMsg = contact.chatHistory[contact.chatHistory.length - 1];
        
        const div = document.createElement('div');
        div.classList.add('contact-card');
        if (currentChatId === contact.id) div.classList.add('active');
        
        div.onclick = () => loadChat(contact.id);

        div.innerHTML = `
            <img src="https://i.pravatar.cc/150?img=${contact.img}" alt="${contact.name}">
            <div class="details">
                <div class="head">
                    <h4>${contact.name}</h4>
                    <span>${lastMsg.time}</span>
                </div>
                <p class="msg-preview">
                    ${lastMsg.text}
                </p>
            </div>
        `;
        contactListEl.appendChild(div);
    });
}

// 2. OPEN A CHAT
function loadChat(id) {
    currentChatId = id;
    const contact = contactsData.find(c => c.id === id);

    chatPlaceholder.style.display = "none";
    chatInterface.style.display = "flex";

    activeName.innerText = contact.name;
    activeImg.src = `https://i.pravatar.cc/150?img=${contact.img}`;

    renderMessages();
    renderContacts(); 
}

// 3. DISPLAY MESSAGES
function renderMessages() {
    messagesBox.innerHTML = "";
    const contact = contactsData.find(c => c.id === currentChatId);

    contact.chatHistory.forEach(msg => {
        const div = document.createElement('div');
        div.classList.add('message', msg.type);
        div.innerHTML = `
            ${msg.text}
            <span class="time">${msg.time}</span>
        `;
        messagesBox.appendChild(div);
    });
    
    messagesBox.scrollTop = messagesBox.scrollHeight;
}

// 4. SEND MESSAGE & RANDOM REPLY
sendBtn.addEventListener('click', sendMessage);
msgInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendMessage() });

function sendMessage() {
    const text = msgInput.value.trim();
    if (!text || !currentChatId) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const contact = contactsData.find(c => c.id === currentChatId);

    // User Message
    contact.chatHistory.push({ text: text, type: 'sent', time: time });
    
    msgInput.value = "";
    renderMessages();
    renderContacts();

    // Auto Reply Logic (Randomly picks from 20 replies)
    setTimeout(() => {
        const randomReply = contact.replyPool[Math.floor(Math.random() * contact.replyPool.length)];

        contact.chatHistory.push({ 
            text: randomReply, 
            type: 'received', 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        });

        if (currentChatId === contact.id) renderMessages();
        renderContacts();
    }, 1000); 
}

// Emoji Handling
emojiBtn.addEventListener('click', () => {
    emojiPicker.classList.toggle('show');
});

document.querySelectorAll('.emoji-picker span').forEach(span => {
    span.addEventListener('click', () => {
        msgInput.value += span.innerText;
        msgInput.focus();
    });
});

renderContacts();
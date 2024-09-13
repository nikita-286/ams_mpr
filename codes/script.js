let recognition;
let isRecording = false;

// Map of number words to digits
const numberWordsToDigits = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    'zero': '0'
};

document.getElementById('start-btn').addEventListener('click', function () {
    if (!isRecording) {
        startRecognition();
    }
});

document.getElementById('pause-btn').addEventListener('click', function () {
    if (isRecording) {
        recognition.stop();
        isRecording = false;
        document.getElementById('pause-btn').disabled = true;
        document.getElementById('start-btn').disabled = false;
    }
});

function startRecognition() {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    isRecording = true;
    document.getElementById('pause-btn').disabled = false;
    document.getElementById('start-btn').disabled = true;

    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            .trim();

        // Replace number words with digits
        const digitTranscript = transcript.toLowerCase().replace(/\b(one|two|three|four|five|six|seven|eight|nine|zero)\b/g, matched => {
            return numberWordsToDigits[matched];
        });

        // Regular expression to match all single, two, or three-digit numbers
        const numberPattern = /\b\d{1,3}\b/g;
        const matchedNumbers = digitTranscript.match(numberPattern);

        const transcriptionArea = document.getElementById('transcription');
        if (matchedNumbers) {
            // Append recognized numbers to the existing content
            transcriptionArea.value += matchedNumbers.join(', ') + ', ';
        }
    });

    // Restart recognition when it ends to create continuous listening
    recognition.addEventListener('end', () => {
        if (isRecording) {
            startRecognition();
        }
    });

    recognition.start();
}

// Define sumMajorCredits function
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'major',
    };
}
// Define sumMinorCredits function
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'minor',
    };
}

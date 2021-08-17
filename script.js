let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9n from Nyack" and it actually stretches all the way from Riverside Park in Manhattan to Soth Nyack, New Jersey. It\'s really an advanture from the beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go.After a quick photo op at the very popular little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GN is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an exteremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very clsoe to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];
//gathers information about the individual words
const storyWords = story.split(' ');
//checks how many words there are
//console.log(storyWords.length);
//filters out all unnecessary words from the story
const betterWords = storyWords.filter(word => {
    for(let i = 0; i < unnecessaryWords.length; i++) {
        if(unnecessaryWords[i].includes(word)) {
            return word;
        }
    }
});

//checking on the overused words
const checkOverUsed = (arr1, arr2) => {
    let appears = 0;

    arr1.forEach(element => {
        for(let j = 0; j < arr2.length; j++) {
            if(element === arr2[j]) {
                appears++;
            }
        }
    });
};

checkOverUsed(betterWords, overusedWords);
//counts how many sentences are there
const checkSentences = (arr) => {
    let sentences = 0;

    arr.forEach(word => {
        if(word(word.length -1) === '.' || (word.length -1) === '!') {
            sentences ++;
        }
    });
    return sentences;
}
checkSentences(betterWords);

//word count
console.log('The word count is ' + betterWords.length);
console.log('The sentences count is ' + checkSentences(betterWords));
console.log('The overused word count is ' + checkOverUsed(betterWords, overusedWords));

//logging better words as one string
console.log(betterWords.join(' '));
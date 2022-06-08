const str = `
010-9313-1991
thekld131@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown foxs jumps over the lazy dog. 
aabbccdddd
`

console.log(
  str.match(/(?<=@).{1,} /g)
  );
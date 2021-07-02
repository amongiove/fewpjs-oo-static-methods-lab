class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  

  static titleize(str){
    const noCapWords = ["the", 'a', "an", "but", "of", "and", "for", "at", "by", "from"];
    let words = str.split(' ')
    let newString = []
    for (let i = 0; i < words.length; i++)
    {
      if (i === 0 || !noCapWords.includes(words[i])){
        newString.push(this.capitalize(words[i]));
      }
      else {
        newString.push(words[i]);
      }
    }
    return newString.join(' ');
  }

}
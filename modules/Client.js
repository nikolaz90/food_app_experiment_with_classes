import User from './User.js'

class Client extends User{
    constructor(name, userName, pw, email, accountType = "client"){
        super(name, userName, pw, email)
        this.accountType = accountType
    }
    accountInfo = {
        preference: {
            isVeggie: false,
            isCompetitor: false,
            recipeKeyWords: [],
            ingredientsPerRecipe: null
        },
        history: {
            recentRecipes: [],
            recentCompetitions: []
        },
        
        isWFH: false 
    }


    // add / remove preferences
    changeVeggieStatus(){
        this.accountInfo.preference.isVeggie = this.accountInfo.preference.isVeggie ? false : true
    }
    changeCompetitorStatus(){
        this.accountInfo.preference.isCompetitor = this.accountInfo.preference.isCompetitor ? false : true
    }
    addRecipeKeyWord(...word){
        this.accountInfo.preference.recipeKeyWords.push(...word)
    }
    changeIngredientPerRecipe(num = 0){
        this.accountInfo.preference.ingredientsPerRecipe = num
    }
    removeRecipeKeyWord(word){
        let removed = this.accountInfo.preference.recipeKeyWords.filter((item)=> item !== word)
        this.accountInfo.preference.recipeKeyWords = removed
    }

    //change history
    addRecipe(recipe){
        this.history.recentRecipes.push(recipe)
    }
    addCompetition(competition){
        this.history.recentCompetitions.push(competition)  //competition argument could be obj with more details like, id, with who, outcome or winner
    }

    //change wfh status
    changeWFHStatus(){
        this.accountInfo.isWFH = this.accountInfo.isWFH ? false : true
    }
}

export default Client
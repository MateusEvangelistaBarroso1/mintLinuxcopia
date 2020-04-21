class ControllerLayer{

    constructor(){
        this._date = document.querySelector("#date");
        this._time = document.querySelector("#time");
        this._screen  = document.querySelector(".screen");
        this._locale = "pt-br";
        this.initKeyBoard();
        this.initialize()
        this.currentDate;
       
    };
    
    initialize(){
        this.timeDateHours();
        setInterval(()=>{
            this.timeDateHours();
        }, 1000)
    }
    initKeyBoard(){
       
        document.addEventListener("keydown", e=>{
            
            switch(e.key){
                
                    case "0":
                    this._screen.style.display = 'none';
                  
                    break;
                    case "1":
                    this._screen.style.backgroundColor = "red";
                    this._screen.style.border = "4px solid red";
                    break;
                    case "2":
                    this._screen.style.backgroundColor = "blue";
                    this._screen.style.border = "4px solid blue";
                    break;
                    case "3":
                    this._screen.style.backgroundColor = "green";
                    this._screen.style.border = "4px solid green"
                    break;case "4":
                    this._screen.style.backgroundColor = "yellow";
                    this._screen.style.border = "4px solid yellow";
                    break;
                    case "5":
                    this._screen.style.backgroundColor = "black";
                    this._screen.style.border = "4px solid black";
                    break;
                    case "6":
                    this._screen.style.backgroundColor = "orange";
                    this._screen.style.border = "4px solid orange";
                    break;
                    case "7":
                    this._screen.style.backgroundColor = "gray";
                    this._screen.style.border = "4px solid gray"
                    break;
                    case "8":
                    this._screen.style.backgroundColor = "purple";
                    this._screen.style.border = "4px solid purple"
                    break;
                    case "9":
                    this._screen.style.display = "block";
                    break;
            }
        })
    };

    timeDateHours(){
        this.dateEl = this.currentDate.toLocaleDateString(this._locale);
        this.timeEl = this.currentDate.toLocaleTimeString(this._locale);
    }
    get dateEl (){
        return this._date.innerHTML;
    }
    set dateEl(value){
        this._date.innerHTML = value;
    }

    get timeEl (){
        return this._time.innerHTML;
    }
    set timeEl(value){
        this._time.innerHTML = value;
    }
    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this.currentDate.innerHTML = value
    }

}
/* globals fetch */
//var update = document.getElementById('update')
//var del = document.getElementById('delete')
//
//update.addEventListener('click', function () {
//  fetch('quotes', {
//    method: 'put',
//    headers: {'Content-Type': 'application/json'},
//    body: JSON.stringify({
//      'name': 'Darth Vader',
//      'quote': 'I find your lack of faith disturbing.'
//    })
//  })
//  .then(response => {
//    if (response.ok) return response.json()
//  })
//  .then(data => {
//    console.log(data)
//  })
//})
//
//del.addEventListener('click', function () {
//  fetch('quotes', {
//    method: 'delete',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify({
//      'name': 'Darth Vader'
//    })
//  }).then(function (response) {
//    window.location.reload()
//  })
//})


 var psychoanalytic = {
        ID:function(){}, 
        ego:function(){}, 
        superego:function(){}
        }
        var neoanalytic = {
        consciousEgo:'OK',
        personalUnconscious:'',
        collectiveUnconscious:'',
        introverted:'',
        extroverted:''
        }
        var motivational = {
        occupational:'',
        societal:'',
        love:''
        }
        function Emotions(){
        this.emoArray =[
        this.acceptance = 50,
        this.affection = 50,
        this.aggression = 50,
        this.ambivalence = 50,
        this.apathy = 50,
        this.anxiety = 50,
        this.boredom = 50,
        this.compassion = 50,
        this.confusion = 50,
        this.contempt = 50,
        this.depression = 50,
        this.doubt = 50,
        this.ecstasy = 50,
        this.empathy = 50,
        this.envy = 50,
        this.embarrassment = 50,
        this.euphoria = 50,
        this.forgiveness = 50,
        this.frustration = 50,
        this.gratitude = 50,
        this.grief = 50,
        this.guilt = 50,
        this.hatred = 50,
        this.hope = 50,
        this.horror = 50,
        this.hostility = 50,
        this.homesickness = 50,
        this.hunger = 50,
        this.hysteria = 50,
        this.interest = 50,
        this.loneliness = 50,
        this.love = 50,
        this.paranoia = 50,
        this.pity = 50,
        this.pleasure = 50,
        this.pride = 50,
        this.rage = 50,
        this.regret = 50,
        this.remorse = 50,
        this.shame = 50,
        this.suffering = 50,
        this.sympathy = 50
        ];
        this.emoArrayNames = [   
            
           'acceptance',
            'affection',
            'aggression',
            'ambivalence',
            'apathy',
            'anxiety',
            'boredom',
            'compassion',
            'confusion',
            'contempt',
            'depression',
            'doubt',
            'ecstasy',
            'empathy',
            'envy',
            'embarrassment',
            'euphoria',
            'forgiveness',
            'frustration',
            'gratitude',
            'grief',
            'guilt',
            'hatred',
            'hope',
            'horror',
            'hostility',
            'homesickness',
            'hunger',
            'hysteria',
            'interest',
            'loneliness',
            'love',
            'paranoia',
            'pity',
            'pleasure',
            'pride',
            'rage',
            'regret',
            'remorse',
            'shame',
            'suffering',
            'sympathy'
                            ];
            
            
       
        //operational vars    
        this.test = 'OK';
        this.qcount = 0;
        this.interval = 10000;   
        this.valArray=[];
        this.fc = "form-control";
        }
        //----------------------------------------------------
        Emotions.prototype.actions = function(){   
        //in order of occurance    
        this.sensing = function (){};
        this.feeling = function (){};
        this.intuiting = function (){};
        this.thinking = function (){};
        }
        //loops
        Emotions.prototype.mind = function()
        {
        var ct = this.qcount++;
        this.showView('disp', ct);
        //console.log(this.qcount);
        }
        //creates a random number
        Emotions.prototype.getRand = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        //show a view
        Emotions.prototype.showView= function(elem, view) 
        {
        document.getElementById(elem).innerHTML = view ;
        }
     
        // get property names returns an array of prop names    
        Emotions.prototype.getPropName = function(data)
        {
        var arr= [];
        for (var prop in data) {
        var propName = prop;
        arr.push(propName);
        }
        return arr;
        } 
        // builds the emotions view
        Emotions.prototype.buildEmoView= function() 
        {
        var content ='';
        var data = this.emoArray;
        var names = this.getPropName(data);   
        for(var i=0;i<names.length;i++)
        {
        var e = this.emoArrayNames[i];
        content += '<div class="col-sm-2 box">';
        content += '<h3>'+e.capitalize()+'</h3> ';
        content += '<input class="'+this.fc+'" type="hidden" id="'+e+'" value="'+this.emoArray[i]+'" min="0" max="100"/>';
        content += '<div class="text-center"><div class="btn-group ">';
        content += '<button onclick="decVal('+e+')" type="button" class="btn btn-primary">';
        content += '<i class="glyphicon glyphicon-arrow-down"></i>';
        content += '</button>';
        content += '<button onclick="normalizeVal('+e+')" type="button" class="btn btn-primary">OK</button>';
        content += '<button onclick="incVal('+e+')" type="button" class="btn btn-primary">';
        content += '<i class="glyphicon glyphicon-arrow-up"></i>';
        content += '</button>';
        content += '</div></div>';
        content += '</div>';
        }
        this.showView('emoView', content);
        }
//NON PROTOTYPE FUNCTIONS
//---------------------------------------------------------------
        
        
        var fc = "form-control";
        
                //returns 50
                function normalizeVal(elem)
                {
               // console.log(elem.value);
                document.getElementById(elem.id).value = 50;
                    getValues();
                }
                //increments a value
                function incVal(elem)
                {
               // console.log(elem.id);
                var t =  document.getElementById(elem.id).value;
                t++;    
                document.getElementById(elem.id).value = t;
                    getValues();    
                }
                //decriments a value
                function decVal(elem)
                {
               // console.log(elem.id);
                var t =  document.getElementById(elem.id).value;
                t--;    
                document.getElementById(elem.id).value = t;
                    getValues();
                }      
 
                //get values
                function getValues()
                {
               
                    var nmarr = [];
                for(var i=0;i<emo.emoArrayNames.length;i++)
                {
                var e = emo.emoArrayNames[i];
                    
                var t = document.getElementById(e).value
                nmarr.push(t);
                    emo.valArray = nmarr;
                    console.log (emo.valArray);
                }
               var sum = nmarr.reduce(function(a, b) { return parseInt(a) + parseInt(b); }, 0);
                    console.log(sum );
                }

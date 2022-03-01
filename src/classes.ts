/**
 * (1) Define the following class:
 *
 * BankAccount
 *
 *  Attributes
 *      amount: number // The amount of money in the bank account
 *      name: string // The name given to this bank account.
 *
 *  Methods
 *      constructor(name: string): BankAccount
 *          Creates a new bank account with the given name.
 *      deposit(added_amount: number): number
 *          Consumes the amount the user is depositing into their account, to be added to the amount.
 *          Returns the new balance.
 *      withdraw(amount_requested: number): number
 *          Consumes the amount the user is attempting to withdraw. If the amount in the account
 *          is less than the amount requested, set the account's amount to be 0 and return
 *          however much was in the account before then.
 *      isEmpty(): boolean
 *          Returns whether the account is empty (i.e., at zero).
 *
 */
 class BankAccount { 
    // attributes 
        amount: number;
        name: string;
   // function 
        constructor(name:string,amount:number) { 
        this.name = name 
        this.amount = amount 
        } 
   // way 
       deposit(added_amount: number):number{
           this.amount = this.amount + added_amount
       return this.amount 
    }
       
    withdraw(amount_requested: number){
       if (amount_requested>this.amount){
           this.amount=0
       return this.amount 
       }else {
           this.amount = this.amount - amount_requested
       return this.amount 
    }}
    isEmpty(): boolean{
       if (this.amount==0){
           return true}else{
           return false}
    }
       
       
       }

/**
 * (2) Make 3 sample bank accounts and demonstrate withdrawing and depositing money into them.
 */
 var bank1 = new BankAccount("Bank1",1000)
 var bank2 = new BankAccount("Bank2",10000)
 var bank3 = new BankAccount("Bank3",100000)
 
 // run
 var depositbank1 = bank1.deposit(1000)
 var withdrawbank1 = bank1.withdraw(5000)
 var isemptybank1 = bank1.isEmpty()
 
 console.log("Bank1")
 console.log("after deposit: "+depositbank1)
 console.log("after withdraw: "+withdrawbank1)
 console.log("account is empty: "+isemptybank1)
 
 console.log("Bank2")
 var depositbank2 = bank2.deposit(1000)
 var withdrawbank2 = bank2.withdraw(1000)
 var isemptybank2 = bank2.isEmpty()
 console.log("after deposit: "+depositbank2)
 console.log("after withdraw: "+withdrawbank2)
 console.log("account is empty: "+isemptybank2)
 
 console.log("Bank3")
 var depositbank3 = bank3.deposit(99999)
 var withdrawbank3 = bank3.withdraw(99999999999)
 var isemptybank3 = bank3.isEmpty()
 console.log("after deposit: "+depositbank3)
 console.log("after withdraw: "+withdrawbank3)
 console.log("account is empty: "+isemptybank3)


/**
 * (3) Define the following class:
 *
 * SpaceShip
 *
 *     Attributes:
 *         x: number // horizontal position on game grid
 *         y: number // vertical position on game grid
 *         callSign: string // Cool name for this ship
 *         onFire: boolean // Whether or not the ship is on fire
 *         ammo: number // How much ammo the ship has
 *         friends: Array<SpaceShip> // Other ships that this ship has met
 *
 *     Methods:
 *         constructor(): SpaceShip
 *             Spaceships start off at (0, 0), not on fire, with 0 ammo, and no friends.
 *         shoot(): void
 *             If there is ammo, decrease it by one and console.log a message about shooting.
 *             If there is no ammo, set the ship on fire.
 *         collectAmmo(clipAmount: number): void
 *             Add the clipAmount to the ammo
 *         makeFriend(newFriend: SpaceShip): boolean
 *             If the new friend has the same X and Y positions, add the newFriend to this
 *             ship's friends.
 *         pingFriends(): void
 *             Print out a message saying hello to each friend, referring to their callsign.
 *         moveTo(x: number, y: number): void
 *             Update the ship's position to the new location.
 *
 */
 class SpaceShip { 
    x: number
    y: number
    callSign: string
    onFire: boolean
    ammo: number
    friends: Array<SpaceShip> 
// function 
constructor(x: number,y: number,callSign: string,onFire: boolean,ammo: number,friends: Array<SpaceShip> ) { 
    this.x = x
    this.y = y 
    this.callSign = callSign
    this.onFire=onFire
    this.ammo=ammo
    this.friends=friends
        } 
    // way
    shoot():void{
    if (this.ammo==0){
        this.onFire=true
    //console.log(this.onFire)
    } else{
        this.ammo=this.ammo-1
    console.log("shooting!!!")
        }
        }
        collectAmmo(clipAmount: number): void{
            this.ammo = this.ammo+clipAmount
    
        }
        makeFriend(newFriend: SpaceShip){
            if (this.x == newFriend.x && this.y == newFriend.y ){
                    this.friends.push(newFriend)
    
            }
    
        }
        pingFriends(): void{
            if (this.friends.length>0){
                for (let entry of this.friends) {
                        console.log(entry.callSign);
            }}else{console.log("No friends")}
    

    
        }
        moveTo(x: number, y: number): void{
            this.x=x
            this.y=y
    
        }
    
    
    }

/**
 * (4) Make 3 example ships, ensure that at least two of them are friends, and try
 * calling each of the methods.
 */
 var ship1 = new SpaceShip(0,0,"Ship1",false,0,[])
 var ship2 = new SpaceShip(9,9,"Ship2",false,0,[])
 
 ship1.collectAmmo(2)
 ship1.shoot()
 ship1.makeFriend(ship2)
 ship1.pingFriends()
 ship1.moveTo(9,9)
 ship1.makeFriend(ship2)
 ship1.pingFriends()
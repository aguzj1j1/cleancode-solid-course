(() => {



})
interface Bird{
     eat (): void
}

interface SwimmerBird{
    swim():void;
}

interface FlyingBird{
    fly():void;
}
interface RunningBird{
    run (): void
}
class Tucan implements Bird,FlyingBird {
    public fly (): void{

    }
    public eat (): void{
        
    }
}
class HumminBird implements Bird,FlyingBird{
    swim(): void {
        throw new Error("Method not implemented.");
    }
    public fly (): void{

    }
    public eat (): void{
    }
    
}

class Ostrich implements Bird,RunningBird {
    swim(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.")
    }
    run(): void {
        throw new Error("Method not implemented.")
    }

}

class Penguin implements Bird,RunningBird,SwimmerBird{
    fly(): void {
        throw new Error("Method not implemented.")
    }
    eat(): void {
        throw new Error("Method not implemented.")
    }
    run(): void {
        throw new Error("Method not implemented.")
    }
    swim():void{

    }

}
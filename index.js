class Circle {
    constructor(radius){
        this.radius = radius
    }

    set diameter(dia){
        this.diameter = dia
    }

    get diameter(){
        return this.radius * 2
    }

    set circumference(cir){
        this.circumference = cir
    }

    get circumference(){
        return Math.PI * this.diameter
    }

    set area(a){
        this.area = a
    }

    get area(){
        return Math.PI * (this.radius * this.radius)
    }
}
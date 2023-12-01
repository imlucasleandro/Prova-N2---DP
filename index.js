class Funcionario {
    constructor(rg, nome) {
        this.rg = rg
        this.nome = nome
    }

    cadastrar() {
        console.log(`Funcionário ${this.nome} cadastrado.`)
    }

    demitir() {
        console.log(`Funcionário ${this.nome} demitido.`)
    }
}

class Vendedor extends Funcionario {
    constructor(rg, nome, comissao, numeroVendas) {
        super(rg, nome)
        this.comissao = comissao
        this.numeroVendas = numeroVendas
    }

    calcularSalario() {
        return this.comissao * this.numeroVendas
    }
}

class Consultor extends Funcionario {
    constructor(rg, nome, valorHora, horasTrabalhadas) {
        super(rg, nome)
        this.valorHora = valorHora
        this.horasTrabalhadas = horasTrabalhadas
    }

    calcularSalario() {
        return this.valorHora * this.horasTrabalhadas
    }
}

class Gerente extends Funcionario {
    constructor(rg, nome, bonificacao) {
        super(rg, nome)
        this.bonificacao = bonificacao
    }

    calcularSalario() {
        return this.bonificacao
    }
}

class ControleCalculo {
    mostrarSalario(funcionario) {
        console.log(`Salário de ${funcionario.nome}: ${funcionario.calcularSalario()}`)
    }
}

let vendedor1 = new Vendedor("123", "João", 0.05, 100)
let consultor1 = new Consultor("456", "Maria", 50, 40)
let gerente1 = new Gerente("789", "Carlos", 5000)

let controleCalculo = new ControleCalculo()
controleCalculo.mostrarSalario(vendedor1)
controleCalculo.mostrarSalario(consultor1)
controleCalculo.mostrarSalario(gerente1)



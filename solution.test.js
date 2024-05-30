const { calculateGradesAndAverage, math, sciences,humanities, languages, technicals, calculateAverage }=require('./solution')

describe('Maths',()=>{
    it('Return Grading starts from 0 to 100 for values below 0 or above 100',()=>{
        expect(math(200)).toBe('Grading starts from 0 to 100')
    })
    it('Return if value is between 70 and 100',()=>{
        expect(math(85)).toBe('A')
    })
    it('Return if value is between 60 and 69',()=>{
        expect(math(60)).toBe('B')
    })
    it('Return if value is between 50 and 59',()=>{
        expect(math(59)).toBe('C')
    })
    it('Return if value is between 40 and 49',()=>{
        expect(math(49)).toBe('Pass')
    })
    it('Return if value is below 40',()=>{
        expect(math(20)).toBe('Sup')
    })
})

describe('sciences',()=>{
    it('Return Grading starts from 0 to 100 for values below 0 or above 100',()=>{
        expect(sciences(200)).toBe('Grading starts from 0 to 100')
    })
    it('Return if value is between 70 and 100',()=>{
        expect(sciences(71)).toBe('A')
    })
    it('Return if value is between 60 and 69',()=>{
        expect(sciences(60)).toBe('B')
    })
    it('Return if value is between 50 and 59',()=>{
        expect(sciences(55)).toBe('C')
    })
    it('Return if value is between 40 and 49',()=>{
        expect(sciences(44)).toBe('Pass')
    })
    it('Return if value is below 40',()=>{
        expect(sciences(20)).toBe('Sup')
    })
})

describe('Humanities',()=>{
    it('Return Grading starts from 0 to 100 for values below 0 or above 100',()=>{
        expect(humanities(200)).toBe('Grading starts from 0 to 100')
    })
    it('Return if value is between 80 and 100',()=>{
        expect(humanities(95)).toBe('A')
    })
    it('Return if value is between 70 and 79',()=>{
        expect(humanities(79)).toBe('B')
    })
    it('Return if value is between 60 and 69',()=>{
        expect(humanities(65)).toBe('C')
    })
    it('Return if value is between 50 and 59',()=>{
        expect(humanities(55)).toBe('Pass')
    })
    it('Return if value is below 50',()=>{
        expect(humanities(20)).toBe('Sup')
    })
})

describe('Languages',()=>{
    it('Return Grading starts from 0 to 100 for values below 0 or above 100',()=>{
        expect(languages(200)).toBe('Grading starts from 0 to 100')
    })
    it('Return if value is between 75 and 100',()=>{
        expect(languages(76)).toBe('A')
    })
    it('Return if value is between 65 and 74',()=>{
        expect(languages(68)).toBe('B')
    })
    it('Return if value is between 55 and 64',()=>{
        expect(languages(57)).toBe('C')
    })
    it('Return if value is between 45 and 54',()=>{
        expect(languages(46)).toBe('Pass')
    })
    it('Return if value is below 45',()=>{
        expect(languages(20)).toBe('Sup')
    })
})

describe('Technicals',()=>{
    it('Return Grading starts from 0 to 100 for values below 0 or above 100',()=>{
        expect(languages(200)).toBe('Grading starts from 0 to 100')
    })
    it('Return if value is between 75 and 100',()=>{
        expect(languages(76)).toBe('A')
    })
    it('Return if value is between 65 and 74',()=>{
        expect(languages(68)).toBe('B')
    })
    it('Return if value is between 55 and 64',()=>{
        expect(languages(57)).toBe('C')
    })
    it('Return if value is between 45 and 54',()=>{
        expect(languages(46)).toBe('Pass')
    })
    it('Return if value is below 45',()=>{
        expect(languages(20)).toBe('Sup')
    })
})

const studentScore = {name: 'Dennis Doe', math: 80, eng: 65, kis: 48, phy: 67, chem: 56, cre:89, comp: 82};


describe('Calculate Grades and Average', ()=>{
    it('Return grades', ()=>{
        expect(calculateGradesAndAverage(studentScore)).toBe("{name: Dennis Doe, math: A, eng: B, kis: Pass, phy: B, chem: C, cre: A, comp: A, avgPnts: 69}")
    })
})

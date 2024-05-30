const math =(value)=>{
    if (value<0 || value>100) { 
        return `Grading starts from 0 to 100`
    }else if (value>=70 && value<=100){
        return `A`
    }else if (value>=60 && value<=69){
        return `B`
    }else if (value>=50 && value<=59){
        return `C`
    }else if (value>=40 && value<=49){
        return `Pass`
    }
    else {
        return `Sup`
    }
}

const sciences =(value)=>{
    if (value<0 || value>100) { 
        return `Grading starts from 0 to 100`
    }else if (value>=70 && value<=100){
        return `A`
    }else if (value>=60 && value<=69){
        return `B`
    }else if (value>=50 && value<=59){
        return `C`
    }else if (value>=40 && value<=49){
        return `Pass`
    }
    else {
        return `Sup`
    }
}

const humanities =(value)=>{
    if (value<0 || value>100) { 
        return `Grading starts from 0 to 100`
    }else if (value>=80 && value<=100){
        return `A`
    }else if (value>=70 && value<=79){
        return `B`
    }else if (value>=60 && value<69){
        return `C`
    }else if (value>=50 && value<59){
        return `Pass`
    }
    else {
        return `Sup`
    }
}

const languages =(value)=>{
    if (value<0 || value>100) { 
        return `Grading starts from 0 to 100`
    }else if (value>=75 && value<=100){
        return `A`
    }else if (value>=65 && value<=74){
        return `B`
    }else if (value>=55 && value<64){
        return `C`
    }else if (value>=45 && value<54){
        return `Pass`
    }
    else {
        return `Sup`
    }
}

const technicals =(value)=>{
    if (value<0 || value>100) { 
        return `Grading starts from 0 to 100`
    }else if (value>=75 && value<=100){
        return `A`
    }else if (value>=65 && value<=74){
        return `B`
    }else if (value>=55 && value<64){
        return `C`
    }else if (value>=45 && value<54){
        return `Pass`
    }
    else {
        return `Sup`
    }
}

const studentScore = {name: "Dennis Doe", math: 80, eng: 65, kis: 48, phy: 67, chem: 56, cre:89, comp: 82};

const calculateGradesAndAverage =(studentScore)=>{
    const avgPts=(studentScore.math+studentScore.eng+studentScore.kis+studentScore.phy+studentScore.chem+studentScore.cre+ studentScore.comp)
    const result= Math.floor(avgPts/7)
    const renderGrades=`{name: ${studentScore.name}, math: ${math(studentScore.math)}, eng: ${languages(studentScore.eng)}, kis: ${languages(studentScore.kis)}, phy: ${sciences(studentScore.phy)}, chem: ${sciences(studentScore.chem)}, cre: ${humanities(studentScore.cre)}, comp: ${technicals(studentScore.comp)}, avgPnts: ${result}}`
    return renderGrades;
}
console.log(calculateGradesAndAverage(studentScore));


module.exports={calculateGradesAndAverage, math, sciences, humanities, languages, technicals}
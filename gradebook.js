
//função que recebe array de valores e retorna a media
function getAverage(scores) {
  let soma = 0;
  for(let i = 0; i < scores.length;i++){
    soma += scores[i];
  }
  return soma / scores.length;
}

//função que recebe a media e converte em nota como String
function getGrade(score) {
  let grade;
  if (score == 100){
    grade = "A++";
  }else if(score >= 90 && score <= 99){
    grade = "A";
  }else if(score >= 80 && score <= 89){
    grade = "B";
  }else if(score >= 70 && score <= 79){
    grade = "C";
  }else if(score >= 60 && score <= 69){
    grade = "D";
  }else if(score >= 0 && score <= 59){
    grade = "F";
  }
  return grade;
}

//função que verifica se o aluno passou ou não
function hasPassingGrade(score) {
  let passed;
  if(getGrade(score) != "F"){
    passed = true;
  }else{
    passed = false;
  }
  return passed;
}

//função que retorna o resultado final do curso para o aluno
function studentMsg(totalScores, studentScore) {
  let passed = hasPassingGrade(studentScore);
  if(passed == true){
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
  }else{
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

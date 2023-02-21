https://teachablemachine.withgoogle.com/models/DLfqz2xib/ Json


function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DLfqz2xib/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);

}
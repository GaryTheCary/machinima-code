#pragma strict

//CHANGING CAMERA
var mCamera: Camera[];

//COUNTING THE TIME TO MAKE CUT
var timer: float;
var audiotrack: AudioSource;

function Start () {
for(var i: int = 0; i< mCamera.length; i++)
{
if(i != 0) mCamera[i].enabled = false;
else mCamera[i].enabled = true;
}

//GET AUDIOSOURCE    
audiotrack = GameObject.FindGameObjectWithTag("MainCamera").GetComponent.<Camera>().GetComponent.<AudioSource>();

//INTRO TIME
yield WaitForSeconds(3);
audiotrack.Play();
}

function Update () {

//INSPECT ON TIME    
timer += Time.deltaTime;
print(timer);

//camera cut
cameraCut(timer);
}


function cameraCut(mtimer: float)
{
if(mtimer <= 3.7f)
{
mCamera[0].enabled = true;
}

if(mtimer>3.7f&&mtimer<=9.4f)
{
mCamera[0].enabled = false;
mCamera[1].enabled = true;
}

if(mtimer>9.4f&&mtimer<=13.74622f)
{
mCamera[1].enabled = false;
mCamera[2].enabled = true;
}

if(mtimer>13.74622f&&mtimer<=25.6f)
{
mCamera[2].enabled = false;
mCamera[3].enabled = true;
}

if(mtimer>25.6f&&mtimer< 31.6524f)
{
mCamera[3].enabled = false;
mCamera[4].enabled = true;
}

if(mtimer >= 31.6524f&&mtimer<35.05527)
{
mCamera[4].enabled = false;
mCamera[5].enabled = true;
}

if(mtimer >= 35.05527f&&mtimer<43.13736f)
{
mCamera[5].enabled = false;
mCamera[6].enabled = true;
}

if(mtimer >= 43.13736f&&mtimer<46.04416){
mCamera[6].enabled = false;
mCamera[7].enabled = true;
}

if(mtimer>=46.04416&&mtimer<48.43699f){
mCamera[7].enabled = false;
mCamera[8].enabled = true;
}

if(mtimer>=48.43699&&mtimer<52.89734f){
mCamera[8].enabled = false;
mCamera[9].enabled = true;
}

if(mtimer>=52.89734f&&mtimer<55.89734f){
mCamera[9].enabled = false;
mCamera[10].enabled = true;
}

if(mtimer>=55.89734f&&mtimer<58.68894f)
{
mCamera[10].enabled = false;
mCamera[11].enabled = true;
}

if(mtimer>=58.68894f&&mtimer<64.26782f){
mCamera[11].enabled = false;
mCamera[12].enabled = true;
}

if(mtimer>=64.26782f&&mtimer<71.26782f){
mCamera[12].enabled = false;
mCamera[13].enabled = true;
}

if(mtimer>=71.26782f&&mtimer<75.56397f){
mCamera[13].enabled = false;
mCamera[14].enabled = true;
}
//3
if(mtimer>=75.56397f&&mtimer<80.44067f){
mCamera[14].enabled = false;
mCamera[15].enabled = true;
}

if(mtimer>=80.44067f&&mtimer<84.57972f){
mCamera[15].enabled = false;
mCamera[2].enabled = true;

}

if(mtimer>=84.57972f&&mtimer<=92.30374f){
mCamera[2].enabled = false;
mCamera[16].enabled = true;
}
}

#pragma strict

var Button_1 : UnityEngine.UI.Text;
var Button_2 : UnityEngine.UI.Text;
var Button_3 : UnityEngine.UI.Text;
var Button_4 : UnityEngine.UI.Text;

var Time_Left : int = 60;
var Time_Is_Out : boolean = false;
var Game_Status : boolean = true;

var Title : UnityEngine.UI.Text;
var Score_Current : UnityEngine.UI.Text;
var Score_High : UnityEngine.UI.Text;
var Time_Left_Text : UnityEngine.UI.Text;
var Question : UnityEngine.UI.Text;

var Button_Restart : GameObject;
var Button_Quit : GameObject;

var Option_1 : GameObject;
var Option_2 : GameObject;
var Option_3 : GameObject;
var Option_4 : GameObject;
var Button_Current : GameObject;

var Conversion_Input : int;
var Conversion_Export : int;
var Input_Number : float;
var Answer : float;
var Conversions_Array = new Array ("Inches");

function Start () {
	Button_Restart.SetActive(false);
	Button_Quit.SetActive(false);
	PlayerPrefs.SetInt("Score_Current", 0);
	Conversions_Array.Add("Feet");
	Conversions_Array.Add("Yard");
	Conversions_Array.Add("Rod");
	Conversions_Array.Add("Furlong");
	Conversions_Array.Add("Statute Mile");
	Conversions_Array.Add("League");
	Conversions_Array.Add("International Nautical Mile");
	Set_The_Problem();
	CountDown();
}

function Update () {
	if (PlayerPrefs.GetInt("Score_Current") > PlayerPrefs.GetInt("Score_High")) {
		PlayerPrefs.SetInt("Score_High", PlayerPrefs.GetInt("Score_Current"));
	}
	Score_Current.text = "Current Score: " + PlayerPrefs.GetInt("Score_Current");
	Score_High.text = "Highscore: " + PlayerPrefs.GetInt("Score_High");
	Time_Left_Text.text = "Time Left: " + Time_Left;
}

function Set_The_Problem () {
	Conversion_Input = Random.Range(0, 8);
	Conversion_Export = Random.Range(0, 8);
	Input_Number = Random.Range(1, 11);
	Convert();
	var Picker : int = Random.Range(1, 5);
	Button_1.text = (Mathf.Round((Answer + (Answer / Random.Range(1, 9))) * 10000f) / 10000f).ToString();
	Button_2.text = (Mathf.Round((Answer + (Answer / Random.Range(1, 9))) * 10000f) / 10000f).ToString();
	Button_3.text = (Mathf.Round((Answer - (Answer / Random.Range(1, 9))) * 10000f) / 10000f).ToString();
	Button_4.text = (Mathf.Round((Answer - (Answer / Random.Range(1, 9))) * 10000f) / 10000f).ToString();
	if (Picker == 1) {
		Button_1.text = Answer.ToString();
	}else if (Picker == 2) {
		Button_2.text = Answer.ToString();
	}else if (Picker == 3) {
		Button_3.text = Answer.ToString();
	}else if (Picker == 4) {
		Button_4.text = Answer.ToString();
	}
	Question.text = "Convert " + Input_Number + " " + Conversions_Array[Conversion_Input + 1] + " to " + Conversions_Array[Conversion_Export + 1];
	Debug.Log(Answer);
}

function Option () {
	if (Game_Status == true) {
		var Child : UnityEngine.UI.Text = Button_Current.GetComponentInChildren.<UnityEngine.UI.Text>();
		if (Child.text == Answer.ToString()) {
			PlayerPrefs.SetInt("Score_Current", PlayerPrefs.GetInt("Score_Current") + 1);
			Set_The_Problem();
		}else {
			Game_Status = false;
		}
	}
}

function CountDown () {
	while (Time_Left > 0 && Game_Status == true) {
		Time_Left--;
		yield WaitForSeconds (1);
	}
	Time_Is_Out = true;
	Button_Restart.SetActive(true);
	Button_Quit.SetActive(true);
	Title.text = "Game Over";
}

function Switcher_1 () {
	Button_Current = Option_1;
}

function Switcher_2 () {
	Button_Current = Option_2;
}

function Switcher_3 () {
	Button_Current = Option_3;
}

function Switcher_4 () {
	Button_Current = Option_4;
}

function RestartGame () {
	Application.LoadLevel("Game");
}

function ExitGame () {
	Application.Quit();
}

function Convert () {
	if (Conversion_Input == 0) {
		if (Conversion_Export == 0) {
			Answer = Input_Number * 1;
		}else if (Conversion_Export == 1) {
			Answer = Input_Number / 12;
		}else if (Conversion_Export == 2) {
			Answer = Input_Number / 36;
		}else if (Conversion_Export == 3) {
			Answer = Input_Number / 198;
		}else if (Conversion_Export == 4) {
			Answer = Input_Number / 7920.02;
		}else if (Conversion_Export == 5) {
			Answer = Input_Number / 63360;
		}else if (Conversion_Export == 6) {
			Answer = Input_Number / 218740;
		}else if (Conversion_Export == 7) {
			Answer = Input_Number / 72913.4;
		}
	}else if (Conversion_Input == 1) {
		if (Conversion_Export == 0) {
			Answer = Input_Number * 12;
		}else if (Conversion_Export == 1) {
			Answer = Input_Number * 1;
		}else if (Conversion_Export == 2) {
			Answer = Input_Number / 3;
		}else if (Conversion_Export == 3) {
			Answer = Input_Number / 16.5;
		}else if (Conversion_Export == 4) {
			Answer = Input_Number / 660.001;
		}else if (Conversion_Export == 5) {
			Answer = Input_Number / 5280;
		}else if (Conversion_Export == 6) {
			Answer = Input_Number / 18228.3;
		}else if (Conversion_Export == 7) {
			Answer = Input_Number / 6076.12;
		}
	}else if (Conversion_Input == 2) {
		if (Conversion_Export == 0) {
			Answer = Input_Number * 36;
		}else if (Conversion_Export == 1) {
			Answer = Input_Number * 3;
		}else if (Conversion_Export == 2) {
			Answer = Input_Number * 1;
		}else if (Conversion_Export == 3) {
			Answer = Input_Number / 5.5;
		}else if (Conversion_Export == 4) {
			Answer = Input_Number / 220;
		}else if (Conversion_Export == 5) {
			Answer = Input_Number / 1760;
		}else if (Conversion_Export == 6) {
			Answer = Input_Number / 6076.12;
		}else if (Conversion_Export == 7) {
			Answer = Input_Number / 2025.37;
		}
	}else if (Conversion_Input == 3) {
		if (Conversion_Export == 0) {
			Answer = Input_Number * 198;
		}else if (Conversion_Export == 1) {
			Answer = Input_Number * 16.5;
		}else if (Conversion_Export == 2) {
			Answer = Input_Number * 5.5;
		}else if (Conversion_Export == 3) {
			Answer = Input_Number * 1;
		}else if (Conversion_Export == 4) {
			Answer = Input_Number / 40.0001;
		}else if (Conversion_Export == 5) {
			Answer = Input_Number / 320;
		}else if (Conversion_Export == 6) {
			Answer = Input_Number / 1104.75;
		}else if (Conversion_Export == 7) {
			Answer = Input_Number / 368.249;
		}
	}else if (Conversion_Input == 4) {
		if (Conversion_Export == 0) {
			Answer = Input_Number * 7920.02;
		}else if (Conversion_Export == 1) {
			Answer = Input_Number * 660.001;
		}else if (Conversion_Export == 2) {
			Answer = Input_Number * 220;
		}else if (Conversion_Export == 3) {
			Answer = Input_Number * 40.0001;
		}else if (Conversion_Export == 4) {
			Answer = Input_Number * 1;
		}else if (Conversion_Export == 5) {
			Answer = Input_Number / 7.99998;
		}else if (Conversion_Export == 6) {
			Answer = Input_Number / 27.6187;
		}else if (Conversion_Export == 7) {
			Answer = Input_Number / 9.20622;
		}
	}else if (Conversion_Input == 5) {
		if (Conversion_Export == 0) {
			Answer = Input_Number * 63360;
		}else if (Conversion_Export == 1) {
			Answer = Input_Number * 5280;
		}else if (Conversion_Export == 2) {
			Answer = Input_Number * 1760;
		}else if (Conversion_Export == 3) {
			Answer = Input_Number * 320;
		}else if (Conversion_Export == 4) {
			Answer = Input_Number * 7.99998;
		}else if (Conversion_Export == 5) {
			Answer = Input_Number * 1;
		}else if (Conversion_Export == 6) {
			Answer = Input_Number * 3.45234;
		}else if (Conversion_Export == 7) {
			Answer = Input_Number * 1.15078;
		}
	}else if (Conversion_Input == 6) {
		if (Conversion_Export == 0) {
			Answer = Input_Number * 218740;
		}else if (Conversion_Export == 1) {
			Answer = Input_Number * 18228.3;
		}else if (Conversion_Export == 2) {
			Answer = Input_Number * 6076.12;
		}else if (Conversion_Export == 3) {
			Answer = Input_Number * 1104.75;
		}else if (Conversion_Export == 4) {
			Answer = Input_Number * 27.6187;
		}else if (Conversion_Export == 5) {
			Answer = Input_Number * 3.45234;
		}else if (Conversion_Export == 6) {
			Answer = Input_Number * 1;
		}else if (Conversion_Export == 7) {
			Answer = Input_Number * 3;
		}
	}else if (Conversion_Input == 7) {
		if (Conversion_Export == 0) {
			Answer = Input_Number * 72913.4;
		}else if (Conversion_Export == 1) {
			Answer = Input_Number * 6076.12;
		}else if (Conversion_Export == 2) {
			Answer = Input_Number * 2025.37;
		}else if (Conversion_Export == 3) {
			Answer = Input_Number * 368.249;
		}else if (Conversion_Export == 4) {
			Answer = Input_Number * 9.20622;
		}else if (Conversion_Export == 5) {
			Answer = Input_Number * 1.15078;
		}else if (Conversion_Export == 6) {
			Answer = Input_Number / 3;
		}else if (Conversion_Export == 7) {
			Answer = Input_Number * 1;
		}
	}
}
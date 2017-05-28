app = angular.module('responsiveApp', [])
app.controller('responseCtrl', ['$scope','$http', function($scope,$http){
	

	$scope.featureSlide = [	{"title":"Register",
	"url":"images/features/register.png",
	"caption":"Quick and easy registration for prospective applicants"
	}, 
	{"title": "Login",
	"url":"images/features/login.png",
	"caption":"Login"
	}, 
	{"title":"Csec",
	"url":"images/features/add_csec.png",
	"caption":"Add Csec Subjects and the grade attained for each subject"
	},
	 {"title":"Cape",
	"url":"images/features/choose_cape.png",
	"caption":"Choose prefered CAPE Subjects in order of priority"
	},
	 {"title":"Config",
	"url":"images/features/config.png",
	"caption":"Fine tune settings such as default subject and class size"
	},
	 {"title":"View Applicants",
	"url":"images/features/view_applicants.png",
	"caption":"See a list of all the students who have registered and submitted an application"
	},
	 {"title":"One click match",
	"url":"images/features/match.png",
	"caption":"Match students to courses with the click of a button"
	},
	 {"title":"Timetable",
	"url":"images/features/timetable.png",
	"caption":"Generates a schedule for each subject upon the completion of matching"
	}
]


	$scope.index = 0
	$scope.currentSlide = $scope.featureSlide[$scope.index]

	$scope.nextImage = function(){
		if ($scope.index+1 < $scope.featureSlide.length){
			$scope.index = $scope.index+1
		}
		else{
			$scope.index = 0
		}
		$scope.currentSlide = $scope.featureSlide[$scope.index]
	}

	$scope.previousImage = function(){
		if ($scope.index-1 >=0) {
			$scope.index = $scope.index-1
		}
		else{
			$scope.index = $scope.featureSlide.length-1
		}
		$scope.currentSlide = $scope.featureSlide[$scope.index]
	}

	loop =function(){
			setTimeout(function(){
					if ($scope.index+1 < $scope.featureSlide.length){
					$scope.index = $scope.index+1
					}
					else{
						$scope.index = 0
					}
					$scope.$apply(function(){$scope.currentSlide = $scope.featureSlide[$scope.index]})
					// console.log("loop run")
					// console.log($scope.featureSlide[$scope.index])
			},3000)
			

			setTimeout(loop, 5000);
	}

	loop()

}])

app.controller('aboutCtrl', ['$scope', function($scope){
	$scope.developers = [  {"name":"Kyle Howard","about":"Programmer","image":"images/devs/kyle.jpg"},{"name":"Nicanor Gordon","about":"Programmer","image":"images/devs/nicanor.jpg"},{"name":"Jason Gooden","about":"Programmer","image":"images/devs/jason.jpg"},{"name":"Alex Hewitt","about":"Programmer/Artist","image":"images/devs/alex.jpg"}]
}])
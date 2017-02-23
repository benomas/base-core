<?php
/*
*custom helper, made by Beni at 2016-11-22, the principal porpouse is to bind DFP html from array.
*/

if(!function_exists("requestToModel")){
	/**
	 * load data only if exist, this function is necesary, because when request->field recibe an empty
	 * data, and it is assigned to a numeric field, php change the value to 0. other ways if you need to save
	 * a field not present in the request has a null or has empty string, you can then use the anonnymouse function
	 *
	 * @author	Beni (beni@intagono.com) 2016-12-22
	 *
	 * @param	array	instances	the collection of the instances to check and assign from the request
	 * @param	moderlObject	modelObject, this params is necesary for update purposes
	 *
	 * @return  object or array
	 */
	function requestToModel($instances,$modelObject=null){
		$data=[];
		if($modelObject!==null){
			foreach($instances AS $intance){
				if(is_callable($intance)){
					$intance($modelObject);
				}
				else{
					$segments = explode('.',$intance);
					$field = $segments[count($segments)-1];
					if(\Illuminate\Support\Facades\Input::has($intance)){
						$modelObject->$field=Input::get($intance);
					}
				}
			}
			return $modelObject;
		}
		else{
			foreach($instances AS $intance){
				if(is_callable($intance)){
					$intance($data);
				}
				else{
					$segments = explode('.',$intance);
					$field = $segments[count($segments)-1];
					if(\Illuminate\Support\Facades\Input::has($intance)){
						$data[$field]=Input::get($intance);
					}
				}
			}
		}
		return $data;
	}
}

if(!function_exists("getProductionDay")){

	/**
	 * calculate production day based on delivery day
	 *
	 * @author	Beni (beni@intagono.com) 2017-01-18
	 *
	 * @param	int	deliveryDay	day defined for delivery (1-5)
	 *
	 * @return  int (1-5) production day
	 */
	function getProductionDay($deliveryDay){
		$productionDay = ($deliveryDay + 3) % 5;
		if(!$productionDay)
			$productionDay=5;
		return $productionDay;
	}
}

if(!function_exists("getProductionDate")){

	/**
	 * calculate production date based on production day and payment day
	 *
	 * @author	Beni (beni@intagono.com) 2017-01-18
	 *
	 * @param	int	productionDay day calculed for production (1-5)
	 * @param	int	paymentDay day of payment(1-7)
	 *
	 * @return  string date
	 */
	function getProductionDate($productionDay,$paymentDay){

		$daysFromToday = $productionDay - $paymentDay;

		if($paymentDay >= $productionDay)
			$daysFromToday = $daysFromToday + 7;

		return date("Y-m-d", time()+60*60*24*($daysFromToday));
	}
}

if(!function_exists("getProductionDateFromDeliveryDate")){

	/**
	 * calculate production date based on delively date
	 *
	 * @author	Beni (beni@intagono.com) 2017-01-18
	 *
	 * @param	string	deliveryDate	date calculed for delivery
	 *
	 * @return  string production date
	 */
	function getProductionDateFromDeliveryDate($deliveryDate){

		if(\Carbon\Carbon::parse($deliveryDate)->dayOfWeek<3)
			return \Carbon\Carbon::parse($deliveryDate)->subDays(4)->toDateString();

		return \Carbon\Carbon::parse($deliveryDate)->subDays(2)->toDateString();
	}
}

if(!function_exists("getPackageDay")){

	/**
	 * calculate package day based on delivery day
	 *
	 * @author	Beni (beni@intagono.com) 2017-01-18
	 *
	 * @param	int(1-5)	deliveryDay	day defined for delivery
	 *
	 * @return  int(1-5) package day
	 */
	function getPackageDay($deliveryDay){
		$packageDay = ($deliveryDay + 4) % 5;
		if(!$packageDay)
			$packageDay=5;
		return $packageDay;
	}
}

if(!function_exists("getNextPayDay")){

	/**
	 * calculate the next pay day
	 *
	 * @author	Beni (beni@intagono.com) 2017-01-18
	 *
	 * @param	int(1-5)	productionDay	day calculated for production (1-5)
	 *
	 * @return  int(1-7) next try to pay
	 */
	function getNextPayDay($productionDay){
		$firstTryToCharge = ($productionDay + 5) % 7;
		if(!$firstTryToCharge)
			$firstTryToCharge=7;
		return $firstTryToCharge;
	}
}

if(!function_exists("getTrialDays")){

	/**
	 * calculate the trial days for a subscription after first charge
	 *
	 * @author	Beni (beni@intagono.com) 2017-01-18
	 *
	 * @param	int(1-5)	productionDay	day calculated for production
	 * @param	int(1-7)	paymentDay	day of payment
	 *
	 * @return  int days of trial
	 */
	function getTrialDays($productionDay,$paymentDay){
		$trialDays = $productionDay + 5 - $paymentDay;
		if($trialDays<6)
			$trialDays+=7;

		return $trialDays;
	}
}

if(!function_exists("getFirstDeliveryDate")){

	/**
	 * calculate first delivery date after first charge
	 *
	 * @author	Beni (beni@intagono.com) 2017-01-18
	 *
	 * @param	int	deliveryDay	day selected for delivery
	 * @param	int	productionDay	day calculated for production
	 * @param	int	paymentDay	day of payment
	 *
	 * @return  string date of first delivery
	 */
	function getFirstDeliveryDate($deliveryDay,$productionDay,$paymentDay){

		$daysForDelivery = $deliveryDay - $paymentDay;

		if($daysForDelivery<-3)
			$daysForDelivery+=14;

		if($daysForDelivery<3)
			$daysForDelivery+=7;

		return \Carbon\Carbon::today()->addDays($daysForDelivery)->toDateString();
	}
}

if(!function_exists("factorial")){

	/**
	 * calculate factorial of n
	 *
	 * @author	Beni (beni@intagono.com) 2017-01-18
	 *
	 * @param	iny	n	number for calculate the factorial
	 *
	 * @return  int factorial
	 */
	function factorial($n)
	{
		if($n===1)
			return 1;
		return $n * factorial($n-1);
	}
}


if(!function_exists("dateFormatSwitch")){

	/**
	 * switch between date format
	 *
	 * @author	Beni (beni@intagono.com) 2017-01-18
	 *
	 * @param	string	date	date to convert
	 * @param	string	originFormant	format origin of the date
	 * @param	string	destineFormat	format destine of the date
	 *
	 * @return  string converted date
	 */
	function dateFormatSwitch($date,$originFormant='Y/m/d', $destineFormat='Y-m-d'){
		if( !isset($date) || !$date)
			return null;
		return \Carbon\Carbon::createFromFormat($originFormant,$date)->format($destineFormat);
	}
}

if(!function_exists("getPrefix")){

    function getPrefix($prefix){
        $segments = \Request::segments();
        //for subproyect configuration
        if( count($segments)>1 &&
            $segments[0]!== config('custom.web_route') &&
            $segments[0]!== config('custom.api_route')
            )
        	return $segments[0].'/'.$prefix;
        //for domain configuration
    	return $prefix;
    }
}
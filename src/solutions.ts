const multiplyValue = (value: number, multiplier?: number) : number => {
  if (multiplier || multiplier == 0) {
    return value * multiplier;
  }

  return value * 2;
};



type dataType = string | number | boolean;

const processInput = (value: dataType) : dataType =>{
    if(typeof(value) == "string"){
        return value.trim().toLowerCase();
    }
    else if(typeof(value) == "number"){
        return value * 10;
    }
    else{
        if(value){
            return "Active";
        }
        return "Inactive";
    }
}



const formatCoordinate = ([latitude, longitude, locationName]: readonly [latitude: number, longitude:number, locationName: string]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}




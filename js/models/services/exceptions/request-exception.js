export default function RequestException(message){
    const error = new Error(message);
}

RequestException.prototype = Object.create(Error.prototype);
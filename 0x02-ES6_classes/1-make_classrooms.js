/* eslint-disable */
import ClassRoom from './0-classroom';

export default function initializeRooms() {
    // return [ new ClassRoom(19), new ClassRoom(20), new ClassRoom(34) ];
    const class1 = new ClassRoom(19);
    const class2 = new ClassRoom(20);
    const class3 = new ClassRoom(34);
    const sizeArray = [ class1, class2, class3 ];
    return (sizeArray);
}


8_useEffect

![alt text](image-9.png)
yani kuch ho toh kya karna like load ho to api call karna , db se connect karna etc

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

jaise hi koi vanlue third(count) ki change hogi tureant 1st run kar jaega

![alt text](image-13.png)

![alt text](image-14.png)
ui mai count inc karnie ke liye render hota toh har render pe alert aa rha
and render hone se phele execute ho jata hai bcs cnt nhi bara alert phele aa gaya 

![alt text](image-15.png)

ab cnt+ pe alert nhi aaya
![alt text](image-16.png)
bas page load kae samay aaya tha


![alt text](image-17.png)
cnt update hone ke baad render hone se phele


![alt text](image-18.png)
![alt text](image-19.png)

![alt text](image-20.png)

![alt text](image-21.png)
update and total ki value update hone pe chlata hai

![alt text](image-22.png)
![alt text](image-23.png)

jab cnt ++ tab phele wala unmount haota and fir again mount hota



![alt text](image-24.png)
![alt text](image-25.png)


![alt text](image-28.png)

![alt text](image-26.png)
unmount karo toh stop hoga 
cleanup func chalega
![alt text](image-27.png)


![alt text](image-29.png)

![alt text](image-30.png)

![alt text](image-31.png)

![alt text](image-32.png)
![alt text](image-33.png)

![alt text](image-34.png)
![alt text](image-35.png)
darg karnie pe change show kar rha updated window width

![alt text](image-36.png)

![alt text](image-37.png)

jab app.jsx se hatae tabunmount toh cleanup func 

![alt text](image-38.png)
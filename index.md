# Intel User Persona & PC System Analysis

### Project Introduction

>
> In the PC industry, there are different computer setups for 
> omnifarious PC users. Different types of customers have different 
> needs and budget for their computers. For instance, we think that 
> gamers prefer desktops or laptops with high-end GPU and CPU while 
> office users prefer the ones with decent CPU and long battery life.
> Hence, being aware of the different needs from different customers 
> could help computer retailers dramatically with marketing and 
> resource allocation. With this background, we decided to build a 
> machine learning model that can predict a users’ persona based on 
> the information of their computers.
>
<br/>
<br/>

### Background Info


>
> There are 11 different types of personas (user type) in our 
> dataset and we ignore the group of “Unknown”. We tried to 
> explore the different computer setup for these groups. 
> 
> To take a step further in our investigation, we first 
> did some hypothesis testing for these groups based on 
> some numerical features like the ram of PCs. We chose 
> the paired **T-test** for the testing because we want to 
> check the difference between each pair of groups. In 
> the results (shown in the hypothesis testing notebook), 
> most of our p-values were below the threshold of 0.05, 
> which means there are some significant differences among 
> these groups. The hypothesis testing further proved our 
> guess so we decided to move on to some machine learning models.
>
<br/>
<br/>
### Research Question
> Figure out the relationship between different features and user type.
<br/>
<br/>
### Features

| Feature                   | Type              |  | Feature                   | Type              |
|:--------------------------|:------------------|:-|:--------------------------|:------------------|
| chassistype               | Categorical       |  | graphicscardclass         | Categorical       | 
| chassistype_2in1_category | Categorical       |  | processornumber           | Numerical         |
| countryname_normalized    | Categorical       |  | cpuvendor                 | Categorical       |
| modelvendor_normalized    | Categorical       |  | cpu_family                | Categorical       |
| model_normalized          | Categorical       |  | cpu_suffix                | Categorical       |
| ram                       | Numerical         |  | screensize_category       | Categorical       |
| os                        | Categorical       |  | processor_line            | Categorical       |
| \*ofcores                 | Numerical         |  | vpro_enabled              | Categorical       |
| age_category              | Categorical       |  | discretegraphics          | Categorical       |
| graphicsmanuf             | Categorical       |  
<br/>
<br/>

### ML Models

```



```
### Performance analysis
```


```

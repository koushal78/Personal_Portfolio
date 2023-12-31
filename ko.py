import numpy as np
# # x =np. arange(1,11)
# # np.add.accumulate(x)
# # print(x)
# # this function add pervious number then print one by one
# y = np.arange(1,101).reshape(10,10)
# print(y)
# print(y[:,[1]])
# print("sum of elements",np.sum(y[:,[1]]))
# print("product of elements",np.prod(y[:,[1]]))
# print("maximum of elements",np.max(y[:,[1]]))
# print("Mean of elements",np.mean(y[:,[1]]))
# print("standard of deviation",np.std(y[:,[1]]))# under root of varience
# print("Minimum value",np.min(y[:,[1]]))
# print("Meadian",np.median(y[:,[1]]))




# print("sum of elements",np.sum(y[[1],:]))
# print("product of elements",np.prod(y[[1],:]))
# print("maximum of elements",np.max(y[[1],:]))
# print("Mean of elements",np.mean(y[[1],:]))
# print("standard of deviation",np.std(y[[1],:]))# under root of varience
# print("Minimum value",np.min(y[[1],:]))
# print("Meadian",np.median(y[[1],:]))

# print(y[[1],:])# for printing i row in 2 d dimension array


# x = np.array([1,2,3,4,5,np.nan,6,7,8,9]) # if any inn valid value in the array thennthis method help to calclulate the mean
# print(np.nanmean(x))


# def myufunc(x): # here we create a userdefine  function 
#     return x**3

# x = np.arange(1,11)
# cube = np.frompyfunc(myufunc,1,1) # here we add ythat funtion in the numpy library
# print(cube(x))
# print(type(cube))


#Searching 
# x = np .array([1,2,4,6,8,9,3,5])
# print(x)
# print(np.where(x==5))


#Shorting
# x= np.array([34,2,45,3,2,1,89,54])
# print(np.sort(x))

# data = np.random.randint(10,100,(10,4))
# # print(data)
# print(np.sort(data,axis=0))
# print(np.sort(data,axis=1))
# print(np.sort(data[:,[1]],axis=0))


#filtering Array

# x = np.array([1,2,3,5,6])
# f = [True,False,True,False,True]
# print(x[f])
# x = np.array([1,2,3,5,6])
# f = x%2==1
# print(x[f])


#  string

# st = 'I like abes'
# print(st[2:6])


# st ='i like python '
# # print(st[:6])

# # print(st[2:6:-1])
# st[0] = 'I'

# print("ABES">"AKTU")
# print("ABES"<"AKTU")
# S1 = 'hellohow'
# for i in range(len(S1)):
#     print(S1,end='')
#     s1 = 'a'

# Deletion

st ='i like python '
print(st)

del st

print(st)
# Chapter 1. The Benefits of Using GPUs

Compare to CPU:

- Much higher instruction throughput and memory bandwidth
- A similar price and power envelope

The GPU is designed to excel at executing thousands of them in parallel (尽管单线程比不上 CPU，但胜在数量足够大)。
![](Pasted%20image%2020230808155928.png)
> In general, an application has a mix of parallel parts and sequential parts, so systems are designed with a mix of GPUs and CPUs in order to maximize overall performance.

# Chapter 2. CUDA: A General-Purpose Parallel Computing Platform and Programming Model
![](Pasted%20image%2020230808161005.png)
# Chapter 3. A Scalable Programming Model

The advent of multicore CPUs and manycore GPUs means that mainstream processor chips are now parallel systems. The challenge is to develop application software that transparently scales its parallelism to leverage the increasing number of processor cores, much as 3D graphics applications trans- parently scale their parallelism to manycore GPUs with widely varying numbers of cores.

The CUDA parallel programming model is designed to overcome this challenge while maintaining a low learning curve for programmers familiar with standard programming languages such as C.


# Memory Hierarchy
![](Pasted%20image%2020230808171058.png)

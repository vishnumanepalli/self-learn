import time

def tictoc(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        print(f"Execution time of {func.__name__}: {execution_time} seconds")
        return result
    return wrapper

@tictoc
def function1():
    time.sleep(0.5)
    print("Function 1 executed")

@tictoc
def function2():
    time.sleep(1)
    print("Function 2 executed")

function1()
function2()


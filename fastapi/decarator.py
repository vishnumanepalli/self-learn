import time

def tictoc(func):
    def wrapper():
        start_time = time.time()
        func()
        time_taken = time.time() - start_time
        print(f"Execution time of {func.__name__}: {time_taken} seconds")
    return wrapper

@tictoc
def function1():
    time.sleep(1)

@tictoc
def function2():
    time.sleep(0.5)

function1()
function2()

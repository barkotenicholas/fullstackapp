CREATE OR ALTER PROCEDURE spDeleteCart @product_id VARCHAR(200), @user_id VARCHAR(200)
AS
    BEGIN
        UPDATE cart SET isDeleted = 1 WHERE product_id =@product_id AND user_id = @user_id;
    END    
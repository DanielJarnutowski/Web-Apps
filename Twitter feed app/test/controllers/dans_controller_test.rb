require 'test_helper'

class DansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dan = dans(:one)
  end

  test "should get index" do
    get dans_url
    assert_response :success
  end

  test "should get new" do
    get new_dan_url
    assert_response :success
  end

  test "should create dan" do
    assert_difference('Dan.count') do
      post dans_url, params: { dan: { login: @dan.login } }
    end

    assert_redirected_to dan_url(Dan.last)
  end

  test "should show dan" do
    get dan_url(@dan)
    assert_response :success
  end

  test "should get edit" do
    get edit_dan_url(@dan)
    assert_response :success
  end

  test "should update dan" do
    patch dan_url(@dan), params: { dan: { login: @dan.login } }
    assert_redirected_to dan_url(@dan)
  end

  test "should destroy dan" do
    assert_difference('Dan.count', -1) do
      delete dan_url(@dan)
    end

    assert_redirected_to dans_url
  end
end

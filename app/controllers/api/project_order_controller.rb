class Api::ProjectOrderController < ApplicationController
    def show
        @project_order = ProjectOrder.find_by(id: params[:id])
        if @project_order
            render :show
        else
            render json: ["Error getting order"], status: 401
        end
    end

    def update
        @project_order = ProjectOrder.find_by(id: params[:id])
        if @project_order.update(project_order_params)
            render :show
        else
            render json: ["Error getting order"], status: 401
        end
    end

    private
    def project_order_params
        params.require(:project_order).permit(:id, {:backlog => [], :icebox => []})
    end
end
